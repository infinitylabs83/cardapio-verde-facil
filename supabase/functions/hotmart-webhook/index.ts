// Recebe o webhook (postback) do Hotmart e libera/revoga o acesso na tabela `licencas`.
//
// ATENCAO — fase de testes: ainda nao validamos contra um payload real do Hotmart.
// Por enquanto a funcao registra tudo em log e tenta reconhecer o formato mais comum
// (evento em `event`, hottok em `hottok` no corpo OU no header X-HOTMART-HOTTOK, email em
// `data.buyer.email`, id da transacao em `data.purchase.transaction`). Quando tivermos um
// payload de teste real do Hotmart, ajustamos os caminhos exatos abaixo.

import { createClient } from "jsr:@supabase/supabase-js@2";

const EVENTOS_LIBERA = new Set(["PURCHASE_APPROVED", "PURCHASE_COMPLETE"]);
const EVENTOS_REVOGA = new Set(["PURCHASE_REFUNDED", "PURCHASE_CANCELED", "PURCHASE_CHARGEBACK", "PURCHASE_PROTEST"]);

function extrairHottok(payload: Record<string, unknown>, req: Request): string | null {
  const doHeader = req.headers.get("x-hotmart-hottok");
  if (doHeader) return doHeader;
  const doCorpo = payload?.hottok;
  if (typeof doCorpo === "string") return doCorpo;
  return null;
}

function extrairEmail(payload: any): string | null {
  return payload?.data?.buyer?.email ?? payload?.data?.subscriber?.email ?? null;
}

function extrairTransacao(payload: any): string | null {
  return payload?.data?.purchase?.transaction ?? payload?.id ?? null;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("method not allowed", { status: 405 });
  }

  let payload: Record<string, unknown>;
  const corpoBruto = await req.text();
  try {
    payload = JSON.parse(corpoBruto);
  } catch {
    console.error("payload nao e JSON valido:", corpoBruto.slice(0, 500));
    return new Response("ok", { status: 200 }); // responde 200 pra hotmart nao ficar reenviando um payload quebrado
  }

  // log completo — usar isso pra calibrar o parsing com o payload de teste real
  console.log("hotmart webhook recebido:", JSON.stringify({ headers: Object.fromEntries(req.headers), payload }));

  const hottokEsperado = Deno.env.get("HOTMART_HOTTOK");
  if (hottokEsperado) {
    const hottokRecebido = extrairHottok(payload, req);
    if (hottokRecebido !== hottokEsperado) {
      console.error("hottok invalido ou ausente");
      return new Response("unauthorized", { status: 401 });
    }
  } else {
    console.warn("HOTMART_HOTTOK ainda nao configurado como secret — pulando validacao (fase de teste apenas!)");
  }

  const evento = String(payload?.event ?? "");
  const email = extrairEmail(payload);
  const transacao = extrairTransacao(payload);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  async function logEvento(sucesso: boolean, detalhe: string) {
    const { error } = await supabase.from("eventos_webhook").insert({ email, evento, sucesso, detalhe });
    if (error) console.error("erro ao logar evento:", error);
  }

  if (!email) {
    console.error("nao achei email do comprador no payload, nada a fazer");
    await logEvento(false, "email nao encontrado no payload");
    return new Response("ok", { status: 200 });
  }

  if (EVENTOS_LIBERA.has(evento)) {
    const { error } = await supabase
      .from("licencas")
      .upsert({ email, status: "ativo", origem_transacao: transacao, atualizado_em: new Date().toISOString() });
    if (error) console.error("erro ao liberar licenca:", error);
    await logEvento(!error, error ? String(error.message) : "acesso liberado");
  } else if (EVENTOS_REVOGA.has(evento)) {
    const { error } = await supabase
      .from("licencas")
      .update({ status: "revogado", atualizado_em: new Date().toISOString() })
      .eq("email", email);
    if (error) console.error("erro ao revogar licenca:", error);
    await logEvento(!error, error ? String(error.message) : "acesso revogado");
  } else {
    console.log("evento nao mapeado, ignorando:", evento);
    await logEvento(true, "evento nao mapeado: " + evento);
  }

  return new Response("ok", { status: 200 });
});
