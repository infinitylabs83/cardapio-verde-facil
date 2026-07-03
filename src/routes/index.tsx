import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroOwner from "@/assets/hero-owner.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Cardápio no Verde — Descubra qual prato do seu cardápio dá prejuízo",
      },
      {
        name: "description",
        content:
          "App para dono de restaurante calcular CMV, preço e lucro de cada prato em minutos. Acesso vitalício por R$ 59 (de R$ 169). Sem mensalidade.",
      },
      {
        property: "og:title",
        content: "Cardápio no Verde — Seu cardápio no lucro",
      },
      {
        property: "og:description",
        content:
          "Zere o prejuízo escondido no seu cardápio em uma tarde. Acesso vitalício por R$ 59.",
      },
    ],
  }),
  component: LandingPage,
});

const CHECKOUT_URL = "#comprar";

/* -------------------- Marca -------------------- */
function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  // Prato visto de cima com uma folha — símbolo direto de "cardápio + verde"
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#fff8ea" stroke="#123f2b" strokeWidth="3" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#123f2b" strokeWidth="1.5" opacity="0.35" />
      <path
        d="M32 20c8 0 14 6 14 14 0 .7-.05 1.4-.15 2.1-7.6.4-13.85-5.85-13.85-13.45 0-.9.05-1.78.15-2.65Z"
        fill="#1f6d42"
      />
      <path
        d="M32 20c-.1.87-.15 1.75-.15 2.65 0 4.6 2.3 8.66 5.8 11.1"
        fill="none"
        stroke="#123f2b"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}


function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <LogoMark className="w-11 h-11" />
      <div className="leading-[0.9]">
        <div className="font-display font-extrabold text-[20px] text-leaf tracking-tight">
          Cardápio
        </div>
        <div className="font-display font-extrabold text-[20px] text-leaf-2 tracking-tight">
          no Verde
        </div>
      </div>
    </div>
  );
}

/* -------------------- Header -------------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-leaf/90 border-b border-[color:var(--leaf-2)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <LogoMark className="w-11 h-11" />
          <div className="leading-[0.9]">
            <div className="font-display font-extrabold text-[20px] text-paper-2 tracking-tight">
              Cardápio
            </div>
            <div className="font-display font-extrabold text-[20px] text-receipt tracking-tight">
              no Verde
            </div>
          </div>
        </div>
        <a
          href={CHECKOUT_URL}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-paper-2 text-leaf px-4 py-2 font-extrabold text-[13px] hover:bg-receipt transition-colors"
        >
          Quero acesso por R$ 59
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

/* -------------------- Hero -------------------- */
function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[92vh] md:min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(6,58,38,0.98) 0%, rgba(6,58,38,0.94) 28%, rgba(6,58,38,0.78) 48%, rgba(6,58,38,0.35) 68%, rgba(6,58,38,0.10) 100%), url("${heroOwner.url}")`,
        backgroundSize: "cover",
        backgroundPosition: "72% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay mobile — mais escuro em cima pro texto respirar */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,58,38,0.96) 0%, rgba(6,58,38,0.88) 45%, rgba(6,58,38,0.72) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 md:pl-8 md:pr-5 pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="w-full md:w-[62%] max-w-[900px]">
          {/* etiqueta topo */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-receipt">
              <span className="w-2 h-2 rounded-full bg-receipt animate-pulse" />
              Alerta pro dono de restaurante
            </span>
            <span className="h-px flex-1 bg-paper-2/25 max-w-[240px]" />
          </div>

          {/* Headline */}
          <h1 className="font-serif mt-6 text-paper-2 text-[46px] leading-[0.95] sm:text-[64px] md:text-[80px] lg:text-[92px] md:leading-[0.92] [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
            Tem prato no seu cardápio dando{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-tomato italic">prejuízo</span>
              <svg
                aria-hidden
                viewBox="0 0 400 30"
                className="absolute left-0 right-0 -bottom-2 w-full h-4 text-tomato"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 20 C 80 4, 160 28, 240 10 S 380 24, 398 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .{" "}
            <span className="text-receipt">Você só não sabe qual.</span>
          </h1>

          {/* Sub-linha */}
          <p className="mt-8 md:mt-10 font-display font-semibold text-[18px] md:text-[21px] leading-snug text-paper-2/95 max-w-[560px] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
            Descubra em uma tarde. No seu celular. Sem planilha, sem contador,
            sem mensalidade.
          </p>

          {/* CTA + preço */}
          <div className="mt-8 md:mt-10 inline-flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden shadow-plate max-w-full">
            <a
              href="#comprar"
              className="bg-paper-2 text-leaf px-7 py-5 font-display font-extrabold text-[18px] flex items-center justify-center gap-3 hover:bg-receipt transition-colors"
            >
              Colocar meu cardápio no verde
              <span aria-hidden>→</span>
            </a>
            <div className="bg-leaf-2 px-6 py-4 flex sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-2 border-t sm:border-t-0 sm:border-l border-paper-2/20">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-paper-2/80">
                <span className="line-through opacity-70">R$ 169</span> · vitalício
              </span>
              <span className="font-serif text-receipt text-[34px] leading-none">
                R$ 59
              </span>
            </div>
          </div>

          {/* linha de confiança */}
          <div className="mt-6 text-[13px] text-paper-2/80 font-semibold">
            Pagamento único · 7 dias de garantia · uso pra sempre
          </div>
        </div>
      </div>
    </section>
  );
}





/* -------------------- Dor: história curta -------------------- */
function DorSection() {
  return (
    <section className="bg-[color:var(--paper-2)] border-y border-[color:var(--line)]">
      <div className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Se você é dono de restaurante, isso já aconteceu
        </div>
        <h2 className="font-serif text-[38px] md:text-[52px] leading-[0.98] mt-4">
          O mês fecha, o caixa some, e ninguém sabe explicar pra onde foi o dinheiro.
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <ul className="space-y-4 text-[17px] leading-relaxed">
            {[
              "O fornecedor reajustou o preço há 4 meses e você só percebeu agora.",
              "Você chuta o preço do prato novo olhando o concorrente da esquina.",
              "A planilha do Excel ficou desatualizada e ninguém mexe mais nela.",
              "Você trabalha 12 horas por dia e não sabe dizer quanto sobrou por prato vendido.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-tomato flex-shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="paper-card rounded-2xl p-6 relative">
            <div className="text-[11px] font-extrabold tracking-widest text-leaf uppercase">
              Raio-X de cada R$ 100 que entra
            </div>
            <div className="mt-4 flex items-end gap-3">
              <div className="font-serif text-leaf text-[72px] leading-[0.8]">41%</div>
              <div className="text-[color:var(--muted-brand)] font-extrabold pb-2">
                já sai
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {[
                ["Contas do mês", "R$ 30"],
                ["Impostos", "R$ 9"],
                ["Maquininha", "R$ 2"],
                ["Sobra para ingredientes e bolso", "R$ 59"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex justify-between py-2 font-bold ${
                    i === 0 ? "" : "receipt-dashed"
                  }`}
                >
                  <span>{k}</span>
                  <span className="text-leaf">{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-[color:var(--muted-brand)]">
              Antes dos ingredientes entrarem na conta, essa fatia já tem dono.
              Se você não sabe disso prato a prato, está no escuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Solução: 3 passos -------------------- */
function ComoFunciona() {
  const steps = [
    {
      n: "01",
      t: "Cadastre um prato em minutos",
      d: "Nome do prato, os ingredientes que ele usa e a quantidade. O app calcula o custo real sozinho.",
    },
    {
      n: "02",
      t: "Veja o preço certo — e o preço ideal",
      d: "O Cardápio no Verde te mostra quanto você deveria cobrar para bater a margem que você define. Nada de chute.",
    },
    {
      n: "03",
      t: "Bata o olho e saiba quem dá lucro",
      d: "Cada prato vira uma etiqueta: verde (no lucro), amarela (apertado), vermelha (no prejuízo). Simples assim.",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Como funciona
        </div>
        <h2 className="font-serif text-[38px] md:text-[52px] leading-[0.98] mt-4">
          Três passos entre o seu cardápio e o lucro real.
        </h2>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-5">
        {steps.map((s) => (
          <div
            key={s.n}
            className="paper-card rounded-3xl p-6 flex flex-col gap-3 relative overflow-hidden"
          >
            <div className="font-serif text-[72px] leading-none text-[color:var(--receipt)]">
              {s.n}
            </div>
            <h3 className="font-display text-[22px] font-extrabold text-leaf">
              {s.t}
            </h3>
            <p className="text-[15px] text-[color:var(--muted-brand)] leading-relaxed">
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Benefícios -------------------- */
function Beneficios() {
  const items = [
    { t: "Zere prato no prejuízo", d: "Descubra em minutos quais itens do cardápio saem no vermelho e corrija o preço na semana." },
    { t: "Precifique com segurança", d: "Pare de chutar. Ponha custo, margem desejada e receba o preço certo pra cobrar." },
    { t: "Reaja rápido a reajuste de fornecedor", d: "Mudou o preço do insumo? Você recalcula todos os pratos afetados em minutos, não dias." },
    { t: "Cardápio novo sem medo", d: "Antes de lançar o prato novo, o app te diz se ele fecha conta ou não." },
    { t: "Negocie melhor com fornecedor", d: "Você sabe o peso real de cada insumo no custo. Chega de aceitar aumento sem argumento." },
    { t: "Fim do achismo", d: "Você para de dizer 'acho que dá lucro' e passa a dizer 'sobra R$ 5,04 por prato'." },
  ];
  return (
    <section className="bg-[color:var(--paper-2)] border-y border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
            O que muda no seu restaurante
          </div>
          <h2 className="font-serif text-[38px] md:text-[52px] leading-[0.98] mt-4">
            Um aplicativo. Uma tarde. Um cardápio inteiro no verde.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b) => (
            <div
              key={b.t}
              className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] p-6"
            >
              <div className="flex items-center gap-2 text-leaf-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-[11px] font-extrabold tracking-widest uppercase">Benefício</span>
              </div>
              <h3 className="font-display text-[20px] font-extrabold text-ink mt-2">
                {b.t}
              </h3>
              <p className="text-[15px] text-[color:var(--muted-brand)] leading-relaxed mt-2">
                {b.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Prova por persona -------------------- */
function ProvaSocial() {
  const stories = [
    {
      nome: "Marcos, restaurante de bairro",
      texto:
        "Usei planilha por 3 anos achando que tava tudo certo. Numa tarde, revisei o cardápio no app e descobri que 3 pratos tavam vendendo abaixo do custo desde o último reajuste do fornecedor. Ajustei o preço e no mês seguinte sobrou R$ 2.400 a mais no caixa.",
      cargo: "Comida caseira · MG",
    },
    {
      nome: "Carolina, self-service",
      texto:
        "Sou eu, minha mãe e uma ajudante. Não tenho tempo pra curso de gestão. Peguei um domingo de manhã, cadastrei 12 pratos e já saí sabendo quais dois estavam me dando prejuízo. Mudei o preço na segunda.",
      cargo: "Self-service · SP",
    },
    {
      nome: "Pedro, hamburgueria",
      texto:
        "Ia contratar um sistema de gestão de R$ 220/mês pra resolver isso. O Cardápio no Verde resolveu o meu problema principal — saber o preço certo de cada lanche — por menos que uma diária do sistema.",
      cargo: "Hamburgueria · RS",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Quem já colocou o cardápio no verde
        </div>
        <h2 className="font-serif text-[38px] md:text-[52px] leading-[0.98] mt-4">
          Feito por gente de restaurante, pra gente de restaurante.
        </h2>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-5">
        {stories.map((s) => (
          <div
            key={s.nome}
            className="paper-card rounded-3xl p-6 flex flex-col"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--receipt)" aria-hidden>
              <path d="M7 7h4v4H7c0 3 1 4 4 4v3c-5 0-8-2-8-7V7Zm10 0h4v4h-4c0 3 1 4 4 4v3c-5 0-8-2-8-7V7Z"/>
            </svg>
            <p className="mt-4 text-[15px] leading-relaxed text-ink flex-1">
              “{s.texto}”
            </p>
            <div className="mt-5 pt-4 border-t border-[color:var(--line)]">
              <div className="font-extrabold text-leaf">{s.nome}</div>
              <div className="text-[13px] text-[color:var(--muted-brand)]">
                {s.cargo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Comparativo -------------------- */
function Comparativo() {
  const rows = [
    ["Calcula o custo real de cada prato", true, "Depende de fórmula manual", false],
    ["Recalcula o cardápio quando o insumo sobe", true, false, false],
    ["Etiqueta visual: verde, amarela, vermelha", true, false, false],
    ["Funciona no celular, sem instalar nada", true, false, false],
    ["Mostra o preço ideal pra bater a margem", true, "Se você lembrar de mexer", "Só no fim do mês"],
    ["Precisa de mensalidade", "Não", false, true],
    ["Precisa de contador ou consultor", "Não", "Não", true],
  ];
  return (
    <section className="bg-[color:var(--paper-2)] border-y border-[color:var(--line)]">
      <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
            Comparação honesta
          </div>
          <h2 className="font-serif text-[38px] md:text-[52px] leading-[0.98] mt-4">
            Por que não a planilha? Por que não um sistemão?
          </h2>
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th className="p-4 text-[13px] font-extrabold uppercase tracking-widest text-[color:var(--muted-brand)]"></th>
                <th className="p-4 bg-leaf text-paper-2 rounded-tl-2xl rounded-tr-2xl font-display font-extrabold">
                  Cardápio no Verde
                </th>
                <th className="p-4 font-display font-extrabold text-ink">Planilha</th>
                <th className="p-4 font-display font-extrabold text-ink">Sistemão gestão</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-[color:var(--paper)]" : ""}>
                  <td className="p-4 font-bold text-ink border-t border-[color:var(--line)]">
                    {row[0] as string}
                  </td>
                  {row.slice(1).map((cell, j) => (
                    <td
                      key={j}
                      className={`p-4 text-[14px] border-t border-[color:var(--line)] ${
                        j === 0 ? "bg-[color:var(--leaf)]/5 font-extrabold text-leaf" : "text-[color:var(--muted-brand)]"
                      }`}
                    >
                      {cell === true ? (
                        <span className="inline-flex items-center gap-1 text-leaf-2 font-extrabold">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          Sim
                        </span>
                      ) : cell === false ? (
                        <span className="inline-flex items-center gap-1 text-tomato font-bold">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                          Não
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Objeções -------------------- */
function Objecoes() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    {
      q: "Já uso planilha. Preciso disso?",
      a: "A planilha não te avisa quando o insumo sobe. Ela mostra o número que você mesmo digitou meses atrás. O Cardápio no Verde recalcula o cardápio inteiro em minutos toda vez que algo muda, sem depender de você lembrar de mexer em fórmula.",
    },
    {
      q: "Não tenho tempo pra aprender mais uma coisa.",
      a: "Não tem curso. Não tem configuração. Você cadastra um prato em minutos, como quem manda um WhatsApp. Uma tarde de domingo já revisa o cardápio inteiro.",
    },
    {
      q: "R$ 59 é barato demais, deve ser fraco.",
      a: "O cálculo de CMV é uma fórmula conhecida do setor. O valor do app está em entregar isso rápido, sem erro manual e sem mensalidade. Um único prato mal precificado te custa mais que R$ 59 em uma semana.",
    },
    {
      q: "Meu restaurante é pequeno demais pra isso.",
      a: "É o contrário. Restaurante pequeno não tem folga pra bancar prato no prejuízo por meses. É justamente quem tem menos volume que mais sente o impacto de um preço errado.",
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia incondicional. Não gostou por qualquer motivo, devolvemos os R$ 59, sem pergunta e sem burocracia.",
    },
    {
      q: "Como recebo o acesso? Tenho que instalar alguma coisa?",
      a: "Depois do pagamento você recebe por e-mail e WhatsApp o link único do seu app. Abre no celular, adiciona à tela de início como qualquer app, e pronto. Todos os seus pratos ficam salvos no próprio aparelho — não precisa de conta, senha nem internet o tempo todo.",
    },
  ];
  return (
    <section className="max-w-4xl mx-auto px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Perguntas honestas
        </div>
        <h2 className="font-serif text-[38px] md:text-[52px] leading-[0.98] mt-4">
          Aquilo que você ia perguntar antes de comprar.
        </h2>
      </div>
      <div className="mt-10 space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="paper-card rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                aria-expanded={isOpen}
              >
                <span className="font-display font-extrabold text-[17px] md:text-[19px] text-ink">
                  {it.q}
                </span>
                <span
                  className={`w-9 h-9 rounded-full grid place-items-center bg-leaf text-paper-2 flex-shrink-0 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </span>
              </button>
              {isOpen && (
                <div className="px-5 md:px-6 pb-6 -mt-1 text-[15px] leading-relaxed text-[color:var(--muted-brand)] border-t border-[color:var(--line)] pt-4">
                  {it.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------- Entrega / Como você recebe -------------------- */
function ComoRecebe() {
  const steps = [
    {
      n: 1,
      t: "Pagamento em 1 minuto",
      d: "Pix, cartão ou boleto. Confirmação na hora.",
    },
    {
      n: 2,
      t: "Link único no seu WhatsApp e e-mail",
      d: "Chega automático assim que o pagamento cai. Nenhum cadastro, nenhuma senha.",
    },
    {
      n: 3,
      t: "Adicione à tela do celular",
      d: "Abre no navegador, você toca em 'Adicionar à tela de início' e vira ícone de app como qualquer outro.",
    },
    {
      n: 4,
      t: "Seus pratos ficam salvos no aparelho",
      d: "Tudo o que você cadastra fica guardado no próprio celular. Sem servidor, sem risco de conta suspensa, sem depender de internet o tempo todo.",
    },
  ];
  return (
    <section className="bg-leaf text-paper-2">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="text-[12px] font-extrabold tracking-widest text-[color:var(--receipt)] uppercase">
            Como você recebe
          </div>
          <h2 className="font-serif text-[38px] md:text-[52px] leading-[0.98] mt-4 text-paper-2">
            Comprou hoje. Usando ainda hoje. Sem enrolação técnica.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-white/[0.06] border border-white/15 p-6"
            >
              <div className="w-11 h-11 rounded-full bg-[color:var(--receipt)] text-leaf font-display font-extrabold grid place-items-center text-[18px]">
                {s.n}
              </div>
              <h3 className="font-display font-extrabold text-[18px] mt-4">
                {s.t}
              </h3>
              <p className="text-[14px] text-white/75 mt-2 leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Oferta / Preço -------------------- */
function Oferta() {
  return (
    <section id="comprar" className="max-w-4xl mx-auto px-5 py-16 md:py-24">
      <div className="paper-card rounded-[32px] p-8 md:p-12 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(229,182,74,.55), rgba(229,182,74,0) 68%)",
          }}
        />
        <div className="relative grid md:grid-cols-[1.1fr_.9fr] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-tomato border border-tomato/40 bg-white px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-tomato" />
              Lote de lançamento · vagas limitadas
            </span>
            <h2 className="font-serif text-[42px] md:text-[56px] leading-[0.95] mt-5">
              Um pagamento. Uso pra sempre.
            </h2>
            <p className="mt-4 text-[17px] text-[color:var(--muted-brand)] leading-relaxed">
              Sem mensalidade. Sem taxa escondida. Sem cadastro chato. Você paga
              uma vez e usa o Cardápio no Verde no seu restaurante pelo tempo
              que quiser.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Acesso vitalício ao app no celular",
                "Cadastro ilimitado de pratos e ingredientes",
                "Etiqueta visual verde / amarelo / vermelho",
                "Atualizações futuras incluídas",
                "Garantia incondicional de 7 dias",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] font-semibold text-ink">
                  <span className="mt-1 w-5 h-5 rounded-full bg-leaf-2 text-paper-2 grid place-items-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Recibo de preço */}
          <div className="rounded-3xl bg-[#fff8ea] border border-[color:var(--line)] overflow-hidden shadow-plate">
            <div className="bg-[#f0dfb8] px-5 py-3 flex items-center justify-between text-leaf font-extrabold">
              <span>Cardápio no Verde</span>
              <span className="text-[12px] uppercase tracking-widest">recibo</span>
            </div>
            <div className="p-6">
              <div className="text-[13px] text-[color:var(--muted-brand)] font-bold">
                Acesso vitalício
              </div>
              <div className="flex items-end gap-3 mt-1">
                <span className="text-[color:var(--muted-brand)] line-through text-[20px] font-bold">
                  R$ 169
                </span>
                <span className="font-serif text-leaf text-[72px] leading-[0.8]">
                  R$ 59
                </span>
              </div>
              <div className="text-[13px] text-[color:var(--muted-brand)] mt-2">
                à vista · uma única vez · sem mensalidade
              </div>
              <div className="mt-4 space-y-2 text-[14px]">
                <div className="flex justify-between py-2 font-bold">
                  <span>App Cardápio no Verde</span>
                  <span className="text-leaf">R$ 59,00</span>
                </div>
                <div className="flex justify-between py-2 receipt-dashed font-bold">
                  <span>Atualizações futuras</span>
                  <span className="text-leaf">Incluídas</span>
                </div>
                <div className="flex justify-between py-2 receipt-dashed font-bold">
                  <span>Mensalidade</span>
                  <span className="text-leaf-2">R$ 0,00 · pra sempre</span>
                </div>
              </div>
              <a
                href="https://pay.exemplo.com/cardapio-no-verde"
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-leaf text-paper-2 py-4 font-display font-extrabold text-[16px] hover:bg-leaf-2 transition-colors"
              >
                Quero meu acesso agora
                <span aria-hidden>→</span>
              </a>
              <div className="mt-3 text-center text-[12px] text-[color:var(--muted-brand)]">
                Pix · cartão em até 3x · boleto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Garantia -------------------- */
function Garantia() {
  return (
    <section className="max-w-4xl mx-auto px-5 pb-16 md:pb-24">
      <div className="rounded-[28px] border-2 border-dashed border-[color:var(--leaf)]/40 bg-[color:var(--paper-2)] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-24 h-24 rounded-full bg-leaf text-[color:var(--receipt)] grid place-items-center flex-shrink-0 shadow-plate">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        </div>
        <div>
          <div className="text-[12px] font-extrabold uppercase tracking-widest text-leaf-2">
            Garantia de 7 dias
          </div>
          <h3 className="font-serif text-[30px] md:text-[36px] leading-tight mt-2">
            Testa. Se não te ajudar, devolvemos os R$ 59.
          </h3>
          <p className="text-[15px] text-[color:var(--muted-brand)] mt-3 leading-relaxed">
            O risco é nosso, não seu. Você tem 7 dias para usar à vontade. Não
            gostou, por qualquer motivo? Mande uma mensagem e devolvemos o
            valor integral. Sem pergunta, sem prova, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Rodapé -------------------- */
function Rodape() {
  return (
    <footer className="bg-leaf text-paper-2/80 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="w-10 h-10" />
            <div className="font-display font-extrabold text-paper-2 text-[18px] leading-tight">
              Cardápio no Verde
            </div>
          </div>
          <p className="mt-3 text-[13px] max-w-md">
            Feito por gente de restaurante, pra gente de restaurante. Sem
            cara de sistema, sem cara de curso, sem cara de app de gringo.
          </p>
        </div>
        <div className="text-[12px] text-paper-2/60">
          © {new Date().getFullYear()} Cardápio no Verde. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}

/* -------------------- CTA fixo mobile -------------------- */
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden p-3 bg-[color:var(--paper-2)]/95 backdrop-blur border-t border-[color:var(--line)]">
      <a
        href="#comprar"
        className="flex items-center justify-between gap-3 rounded-2xl bg-leaf text-paper-2 px-5 py-4 font-display font-extrabold shadow-plate"
      >
        <span>
          <span className="block text-[11px] uppercase tracking-widest text-[color:var(--receipt)] font-extrabold">
            Acesso vitalício
          </span>
          <span className="text-[16px]">R$ 59 · pra sempre</span>
        </span>
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

/* -------------------- Página -------------------- */
function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DorSection />
        <ComoFunciona />
        <Beneficios />
        <ProvaSocial />
        <Comparativo />
        <ComoRecebe />
        <Oferta />
        <Garantia />
        <Objecoes />
      </main>
      <Rodape />
      <StickyMobileCTA />
    </div>
  );
}
