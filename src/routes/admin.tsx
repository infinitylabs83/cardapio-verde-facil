import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const SUPA_URL = "https://dnkizipqqyhkfeivnisj.supabase.co";
const SUPA_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRua2l6aXBxcXloa2ZlaXZuaXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMTk1OTUsImV4cCI6MjA5ODY5NTU5NX0.3FEGjpVqPQW_KX5Fx8LhQmYp7-lkiL55oZMmAGf1O7A";
const ADMIN_EMAIL = "gustavohgo0000@gmail.com";
const sb = createClient(SUPA_URL, SUPA_ANON);

type Evento = {
  id: number;
  email: string | null;
  evento: string | null;
  sucesso: boolean;
  detalhe: string | null;
  criado_em: string;
};

type Licenca = {
  email: string;
  status: string;
  origem_transacao: string | null;
  criado_em: string;
  atualizado_em: string;
};

function AdminPage() {
  const [estado, setEstado] = useState<"carregando" | "login" | "aguardando" | "negado" | "ok">("carregando");
  const [email, setEmail] = useState("");
  const [busca, setBusca] = useState("");
  const [dados, setDados] = useState<{ ativas: number; revogadas: number; eventos: Evento[]; licencas: Licenca[] } | null>(null);

  useEffect(() => {
    checar();
    const { data: sub } = sb.auth.onAuthStateChange(() => checar());
    return () => sub.subscription.unsubscribe();
  }, []);

  async function checar() {
    const {
      data: { session },
    } = await sb.auth.getSession();
    if (!session) {
      setEstado((s) => (s === "aguardando" ? s : "login"));
      return;
    }
    if (session.user.email !== ADMIN_EMAIL) {
      setEstado("negado");
      return;
    }
    const [ativasRes, revogadasRes, eventosRes, licencasRes] = await Promise.all([
      sb.from("licencas").select("*", { count: "exact", head: true }).eq("status", "ativo"),
      sb.from("licencas").select("*", { count: "exact", head: true }).eq("status", "revogado"),
      sb.from("eventos_webhook").select("*").order("id", { ascending: false }).limit(30),
      sb.from("licencas").select("*").order("atualizado_em", { ascending: false }),
    ]);
    setDados({
      ativas: ativasRes.count ?? 0,
      revogadas: revogadasRes.count ?? 0,
      eventos: (eventosRes.data as Evento[]) ?? [],
      licencas: (licencasRes.data as Licenca[]) ?? [],
    });
    setEstado("ok");
  }

  async function alterarStatus(alvo: string, novoStatus: "ativo" | "revogado") {
    const { error } = await sb
      .from("licencas")
      .upsert({ email: alvo, status: novoStatus, atualizado_em: new Date().toISOString() });
    if (error) {
      alert("Não consegui alterar: " + error.message);
      return;
    }
    checar();
  }

  async function liberarNovoEmail(e: React.FormEvent) {
    e.preventDefault();
    const alvo = busca.trim().toLowerCase();
    if (!alvo || !alvo.includes("@")) {
      alert("Digita um e-mail válido no campo de busca acima primeiro.");
      return;
    }
    await alterarStatus(alvo, "ativo");
  }

  async function pedirLink(e: React.FormEvent) {
    e.preventDefault();
    await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.href } });
    setEstado("aguardando");
  }

  const wrap = "min-h-screen bg-[#123F2B] text-[#F3EFE0] flex items-center justify-center p-6";
  const card = "max-w-sm w-full text-center";

  if (estado === "carregando") return <div className={wrap} />;

  if (estado === "login") {
    return (
      <div className={wrap}>
        <form onSubmit={pedirLink} className={card}>
          <h1 className="text-2xl font-bold mb-2">Painel do Cardápio no Verde</h1>
          <p className="opacity-80 mb-5 text-sm">Acesso restrito. Digite o e-mail administrador.</p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@exemplo.com"
            className="w-full p-3 rounded-xl text-[#1F2B21] mb-3"
          />
          <button type="submit" className="w-full p-3 rounded-xl bg-[#1F6D42] font-bold">
            Receber link de acesso
          </button>
        </form>
      </div>
    );
  }

  if (estado === "aguardando") {
    return (
      <div className={wrap}>
        <div className={card}>
          <h1 className="text-2xl font-bold mb-2">Prontinho!</h1>
          <p className="opacity-80 text-sm">Confere seu e-mail (e o spam) e clica no link pra entrar.</p>
        </div>
      </div>
    );
  }

  if (estado === "negado") {
    return (
      <div className={wrap}>
        <div className={card}>
          <h1 className="text-2xl font-bold mb-2">Acesso negado</h1>
          <p className="opacity-80 text-sm">Esse e-mail não tem acesso ao painel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3EAD7] text-[#1E261C] p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-1">Painel do Cardápio no Verde</h1>
        <p className="text-sm opacity-70 mb-6">Saúde do negócio, em tempo real.</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 border border-black/10">
            <div className="text-3xl font-extrabold text-[#1F6D42]">{dados?.ativas}</div>
            <div className="text-sm opacity-70">licenças ativas</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-black/10">
            <div className="text-3xl font-extrabold text-[#C7432F]">{dados?.revogadas}</div>
            <div className="text-sm opacity-70">licenças revogadas</div>
          </div>
        </div>

        <h2 className="font-bold mb-3">Alunos</h2>
        <div className="flex gap-2 mb-1">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por e-mail, ou digitar um novo pra liberar..."
            className="flex-1 p-3 rounded-xl border border-black/10"
          />
          {busca.includes("@") && !dados?.licencas.some((l) => l.email === busca.trim().toLowerCase()) && (
            <button
              onClick={liberarNovoEmail}
              className="text-sm font-bold bg-[#1F6D42] text-white rounded-xl px-4 whitespace-nowrap"
            >
              Liberar esse e-mail
            </button>
          )}
        </div>
        <p className="text-xs opacity-60 mb-3">Digite um e-mail que ainda não está na lista pra liberar acesso manualmente.</p>
        <div className="bg-white rounded-2xl border border-black/10 overflow-hidden mb-8">
          {!dados || dados.licencas.length === 0 ? (
            <div className="p-5 text-sm opacity-70">Nenhum aluno ainda.</div>
          ) : (
            dados.licencas
              .filter((l) => l.email.toLowerCase().includes(busca.trim().toLowerCase()))
              .map((l) => (
                <div key={l.email} className="flex items-center justify-between gap-3 p-4 border-b border-black/5 last:border-0">
                  <div>
                    <div className="font-semibold text-sm">{l.email}</div>
                    <div className="text-xs opacity-60">
                      {l.status === "ativo" ? "🟢 ativo" : "🔴 bloqueado"} · atualizado em{" "}
                      {new Date(l.atualizado_em).toLocaleString("pt-BR")}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {l.status !== "ativo" && (
                      <button
                        onClick={() => alterarStatus(l.email, "ativo")}
                        className="text-xs font-bold bg-[#1F6D42] text-white rounded-lg px-3 py-2"
                      >
                        Liberar
                      </button>
                    )}
                    {l.status === "ativo" && (
                      <button
                        onClick={() => alterarStatus(l.email, "revogado")}
                        className="text-xs font-bold bg-[#C7432F] text-white rounded-lg px-3 py-2"
                      >
                        Bloquear
                      </button>
                    )}
                  </div>
                </div>
              ))
          )}
        </div>

        <h2 className="font-bold mb-3">Últimos eventos do webhook (Hotmart)</h2>
        <div className="bg-white rounded-2xl border border-black/10 overflow-hidden">
          {!dados || dados.eventos.length === 0 ? (
            <div className="p-5 text-sm opacity-70">Nenhum evento recebido ainda.</div>
          ) : (
            dados.eventos.map((ev) => (
              <div key={ev.id} className="flex items-center justify-between gap-3 p-4 border-b border-black/5 last:border-0">
                <div>
                  <div className="font-semibold text-sm">
                    {ev.sucesso ? "✅" : "❌"} {ev.evento || "(sem evento)"}
                  </div>
                  <div className="text-xs opacity-60">{ev.email}</div>
                  <div className="text-xs opacity-60">{ev.detalhe}</div>
                </div>
                <div className="text-xs opacity-50 whitespace-nowrap">
                  {new Date(ev.criado_em).toLocaleString("pt-BR")}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
