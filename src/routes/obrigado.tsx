import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Compra confirmada — Cardápio no Verde" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PaginaObrigado,
});

function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="15" y="12" width="34" height="42" rx="4" fill="#000" opacity="0.15" />
      <rect x="13" y="10" width="34" height="42" rx="4" fill="#fff8ea" stroke="#123f2b" strokeWidth="2.5" />
      <line x1="19" y1="10" x2="19" y2="52" stroke="#123f2b" strokeWidth="1.5" opacity="0.35" />
      <line x1="23" y1="19" x2="42" y2="19" stroke="#123f2b" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
      <line x1="23" y1="26" x2="38" y2="26" stroke="#123f2b" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
      <line x1="23" y1="33" x2="40" y2="33" stroke="#123f2b" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
      <circle cx="46" cy="46" r="12" fill="#1f6d42" stroke="#fff8ea" strokeWidth="2.5" />
      <path d="M40.5 46.5 L44.5 50.5 L52 42.5" fill="none" stroke="#fff8ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaginaObrigado() {
  const passos = [
    {
      t: "Acesse cardapionoverde.com.br/app",
      d: "Pelo celular ou computador, direto no navegador.",
    },
    {
      t: "Digite o e-mail que você usou na compra",
      d: "É assim que a gente confirma que é você.",
    },
    {
      t: "Cole o código de 6 números que chegou no seu e-mail",
      d: "Sem senha pra decorar — é só colar o código e pronto.",
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--paper)]">
      <header className="bg-leaf">
        <div className="max-w-3xl mx-auto flex items-center gap-3 px-5 py-4">
          <LogoMark className="w-10 h-10" />
          <div className="leading-[0.9]">
            <div className="font-display font-extrabold text-[18px] text-paper-2 tracking-tight">
              Cardápio
            </div>
            <div className="font-display font-extrabold text-[18px] text-receipt tracking-tight">
              no Verde
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-14 md:py-20">
        <div className="mx-auto w-16 h-16 rounded-full bg-leaf-2 text-paper-2 grid place-items-center shadow-plate">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="font-serif text-[34px] md:text-[46px] leading-[1.05] text-center mt-6">
          Sua compra foi confirmada.
        </h1>
        <p className="mt-3 text-[17px] md:text-[19px] text-center text-[color:var(--muted-brand)] font-semibold">
          Seu acesso ao Cardápio no Verde já está liberado.
        </p>

        <div className="mt-12 paper-card rounded-3xl p-6 md:p-10">
          <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase text-center">
            Como entrar
          </div>
          <h2 className="font-serif text-[26px] md:text-[32px] leading-[1.1] text-center mt-2">
            Três passos, menos de um minuto
          </h2>

          <ol className="mt-9 space-y-7">
            {passos.map((p, i) => (
              <li key={p.t} className="flex gap-4">
                <span className="mt-1 w-9 h-9 rounded-full bg-receipt text-leaf grid place-items-center flex-shrink-0 font-display font-extrabold text-[15px]">
                  {i + 1}
                </span>
                <div>
                  <div className="font-display font-extrabold text-[17px] text-leaf">
                    {p.t}
                  </div>
                  <p className="mt-1 text-[15px] text-[color:var(--muted-brand)] leading-relaxed">
                    {p.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 text-center">
            <a
              href="/app"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-leaf text-paper-2 px-8 py-5 font-display font-extrabold text-[16px] md:text-[17px] shadow-plate hover:bg-leaf-2 transition-colors"
            >
              Acessar o Cardápio no Verde agora
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-6 text-center text-[13px] text-[color:var(--muted-brand)]">
            Não achou o e-mail com o código? Confere a caixa de spam — se não funcionar, é só pedir um novo na hora.
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-[color:var(--paper-2)] border border-[color:var(--line)] p-6 md:p-7">
          <div className="font-display font-extrabold text-[15px] text-leaf">
            Seus materiais de apoio
          </div>
          <p className="mt-2 text-[14.5px] text-[color:var(--muted-brand)] leading-relaxed">
            Na área de compras da Hotmart, junto com o acesso, você também recebeu dois PDFs:
            o <strong className="text-ink">Guia Rápido</strong> (mostra, tela por tela, como montar
            seu primeiro item no app) e as <strong className="text-ink">Instruções de Acesso</strong> (o
            mesmo passo a passo desta página, pra guardar ou imprimir).
          </p>
        </div>
      </main>

      <footer className="border-t border-[color:var(--line)] mt-6">
        <div className="max-w-3xl mx-auto px-5 py-8 text-center">
          <div className="font-display font-extrabold text-[14px] text-leaf">
            Cardápio no Verde
          </div>
          <div className="mt-1 text-[12px] text-[color:var(--muted-brand)]">
            cardapionoverde.com.br
          </div>
        </div>
      </footer>
    </div>
  );
}
