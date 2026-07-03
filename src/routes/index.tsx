import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroOwner from "@/assets/hero-reference.png.asset.json";

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
          "Ferramenta para dono de restaurante calcular o custo real de cada prato em minutos. Semáforo de Margem: veja o que está no vermelho, amarelo e verde. Sem mensalidade.",
      },
      { property: "og:title", content: "Cardápio no Verde — Seu cardápio no lucro" },
      {
        property: "og:description",
        content:
          "Descubra qual prato do seu cardápio está no vermelho. Semáforo de Margem em minutos.",
      },
    ],
  }),
  component: LandingPage,
});

const CTA_ANCHOR = "#oferta";

/* -------------------- Marca -------------------- */
function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  // Miniatura de cardápio (menu) com um check verde — símbolo de "cardápio aprovado / no verde"
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* sombra sutil do cardápio */}
      <rect x="15" y="12" width="34" height="42" rx="4" fill="#000" opacity="0.15" />
      {/* corpo do cardápio (papel creme) */}
      <rect
        x="13"
        y="10"
        width="34"
        height="42"
        rx="4"
        fill="#fff8ea"
        stroke="#123f2b"
        strokeWidth="2.5"
      />
      {/* dobra/lombada esquerda */}
      <line x1="19" y1="10" x2="19" y2="52" stroke="#123f2b" strokeWidth="1.5" opacity="0.35" />
      {/* linhas de itens do cardápio */}
      <line x1="23" y1="19" x2="42" y2="19" stroke="#123f2b" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
      <line x1="23" y1="26" x2="38" y2="26" stroke="#123f2b" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
      <line x1="23" y1="33" x2="40" y2="33" stroke="#123f2b" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
      {/* selo verde do check no canto inferior direito */}
      <circle cx="46" cy="46" r="12" fill="#1f6d42" stroke="#fff8ea" strokeWidth="2.5" />
      <path
        d="M40.5 46.5 L44.5 50.5 L52 42.5"
        fill="none"
        stroke="#fff8ea"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
          href={CTA_ANCHOR}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-paper-2 text-leaf px-4 py-2 font-extrabold text-[13px] hover:bg-receipt transition-colors"
        >
          Quero ver o custo real do meu cardápio
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
      className="relative overflow-hidden min-h-[92vh] md:min-h-[100vh] flex items-center bg-[color:var(--leaf)]"
    >
      {/* Foto de fundo — homem à direita, pratos em primeiro plano */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[position:center_10%] md:bg-[position:right_center] bg-[length:cover] md:bg-[length:auto_100%]"
        style={{
          backgroundImage: `url("${heroOwner.url}")`,
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Gradiente da esquerda pra direita (desktop) */}
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(6,58,38,0.94) 0%, rgba(6,58,38,0.82) 22%, rgba(6,58,38,0.55) 44%, rgba(6,58,38,0.28) 62%, rgba(6,58,38,0.08) 80%, rgba(6,58,38,0) 92%)",
        }}
      />
      {/* Overlay mobile — mais leve para não apagar a foto */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,58,38,0.78) 0%, rgba(6,58,38,0.55) 45%, rgba(6,58,38,0.30) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 md:pl-10 md:pr-5 pt-24 md:pt-24 pb-16 md:pb-20">
        <div className="w-full md:w-[70%] max-w-[860px]">
          {/* etiqueta topo */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-receipt">
              <span className="w-2 h-2 rounded-full bg-receipt animate-pulse" />
              Alerta pro dono de restaurante
            </span>
            <span className="h-px flex-1 bg-paper-2/25 max-w-[320px]" />
          </div>

          {/* Headline em 3 linhas */}
          <h1 className="font-serif mt-6 text-paper-2 text-[44px] leading-[0.98] sm:text-[58px] md:text-[68px] lg:text-[76px] md:leading-[0.98] [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
            Tem prato no seu cardápio<br />
            dando{" "}
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
            .<br />
            <span className="text-receipt">Você só não sabe qual.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-7 md:mt-9 font-display font-semibold text-[17px] md:text-[20px] leading-snug text-paper-2/95 max-w-[620px] [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
            Um erro de R$ 3 no custo de um prato que sai 40 vezes por semana já
            é R$ 480 evaporando todo mês, sem aparecer em nenhum relatório que
            você olha hoje.
          </p>

          {/* CTA único, sem preço */}
          <div className="mt-8">
            <a
              href={CTA_ANCHOR}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-paper-2 text-leaf px-8 py-5 font-display font-extrabold text-[17px] md:text-[18px] shadow-plate hover:bg-receipt transition-colors"
            >
              Quero ver o custo real do meu cardápio
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-5 text-[13px] text-paper-2/80 font-semibold">
            Sem planilha · sem contador · sem mensalidade
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bullets + Vídeo demo -------------------- */
function BulletsDemo() {
  const bullets = [
    "O fornecedor reajustou o insumo há meses e o preço do prato continua o mesmo. Em poucos minutos você descobre qual item já está no vermelho e corrige antes do próximo fechamento.",
    "Aquela promoção que enche o salão pode estar pagando para o cliente comer. Com o custo real na tela, você decide o desconto sabendo exatamente quanto sobra por prato vendido.",
    "Reajustar no achismo assusta o cliente, e reajustar de menos come sua margem em silêncio. Com o número certo na mão, você define o preço com segurança e ainda sabe justificar o valor.",
  ];
  return (
    <section className="bg-[color:var(--paper-2)] border-y border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <ul className="space-y-6">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-4">
              <span className="mt-1 w-8 h-8 rounded-full bg-leaf text-paper-2 grid place-items-center flex-shrink-0 font-display font-extrabold text-[14px]">
                {i + 1}
              </span>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-ink">
                {b}
              </p>
            </li>
          ))}
          <div className="pt-2">
            <a
              href={CTA_ANCHOR}
              className="inline-flex items-center gap-3 rounded-2xl bg-leaf text-paper-2 px-6 py-4 font-display font-extrabold text-[16px] hover:bg-leaf-2 transition-colors"
            >
              Quero ver o custo real do meu cardápio
              <span aria-hidden>→</span>
            </a>
          </div>
        </ul>

        {/* Placeholder de vídeo demo 30-60s */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-dashed border-[color:var(--leaf)]/40 bg-[color:var(--paper)] grid place-items-center text-center p-6">
          <div>
            <div className="w-16 h-16 rounded-full bg-leaf text-paper-2 grid place-items-center mx-auto shadow-plate">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="mt-4 text-[12px] font-extrabold uppercase tracking-widest text-leaf-2">
              Vídeo demo · 30 a 60 segundos
            </div>
            <p className="mt-2 text-[14px] text-[color:var(--muted-brand)] leading-relaxed max-w-[320px] mx-auto">
              Gravação de tela da ferramenta em uso: dono digita os ingredientes,
              semáforo acende vermelho, ajusta o preço, fica verde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bloco 02: Dor (história longa) -------------------- */
function DorSection() {
  const paragrafos = [
    "São 23h de terça-feira. O salão já fechou, a cozinha limpou o último balcão, e você senta com o celular pra somar as vendas do dia no aplicativo do banco. O número parece bom. Mas você não sabe dizer, prato por prato, quanto daquele total virou lucro de verdade.",
    "Faz três meses que o fornecedor de carne reajustou o quilo do contrafilé. Você lembra vagamente de ter visto o boleto mais alto naquele mês, resmungou, pagou e seguiu em frente. O preço do prato no cardápio continua o mesmo desde então. Ninguém avisou, porque ninguém ia avisar. Fornecedor não liga pra te contar que seu prato ficou mais caro de fazer.",
    "No fim de semana, o prato mais pedido do cardápio esgota antes das 21h. Você fica feliz com o movimento, tira foto pra postar no Instagram da loja. O que você não vê é que, se aquele prato específico está no vermelho por causa do reajuste que passou despercebido, quanto mais ele vende, mais dinheiro sai do seu bolso, não entra.",
    "Você já tentou resolver isso com planilha. Abriu uma no Google Sheets, colocou fórmula, preencheu com capricho na primeira semana. Na segunda, o movimento do salão engoliu o tempo. Na terceira, você nem lembrava mais que a planilha existia. Ela não te avisa quando o preço do óleo sobe. Ela só fica lá, parada, mostrando um número que já não é mais verdade.",
    "O motivo disso não é falta de organização sua. É que ninguém te ensinou a calcular ficha técnica com o preço do insumo mudando toda semana, e nenhuma ferramenta te avisa quando a conta que você fez no lançamento do cardápio deixou de valer. O problema não é você, é que o custo do seu prato é um alvo em movimento e você está mirando parado.",
  ];
  return (
    <section className="bg-[color:var(--paper)] border-b border-[color:var(--line)]">
      <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Se você é dono de restaurante, isso já aconteceu
        </div>
        <h2 className="font-serif text-[36px] md:text-[48px] leading-[1] mt-4">
          O mês fecha, o caixa some, e ninguém sabe explicar pra onde foi o dinheiro.
        </h2>
        <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-ink">
          {paragrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bloco 03: Prova social curta -------------------- */
function ProvaCurta() {
  const stories = [
    {
      nome: "Roberto Alencar",
      texto:
        "Vendia o prato executivo há dois anos sem nunca ter revisado o preço desde o lançamento. Ao calcular o custo real, descobriu que perdia R$ 4,50 em cada unidade vendida. Ajustou o cardápio em uma tarde e recuperou R$ 1.200 de margem já no mês seguinte.",
    },
    {
      nome: "Fernanda Costa",
      texto:
        "Achava que o problema do restaurante era falta de movimento. Ao revisar os cinco pratos mais vendidos, viu que dois deles saíam abaixo do custo. Corrigiu o preço sem perder cliente e fechou o mês seguinte com R$ 2.100 a mais no caixa.",
    },
    {
      nome: "Diego Martins",
      texto:
        "Usava planilha havia um ano e confiava nela. Ao testar o simulador com o prato mais vendido da casa, percebeu que o preço do insumo tinha subido três vezes desde a última atualização. Reajustou o cardápio inteiro em uma hora.",
    },
  ];
  return (
    <section className="bg-[color:var(--paper-2)] border-b border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Quem já usou
        </div>
        <h2 className="font-serif text-[32px] md:text-[42px] leading-[1] mt-3 max-w-3xl">
          O que mudou pra quem colocou os números na mesa.
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {stories.map((s) => (
            <div key={s.nome} className="paper-card rounded-3xl p-6 flex flex-col">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--receipt)" aria-hidden>
                <path d="M7 7h4v4H7c0 3 1 4 4 4v3c-5 0-8-2-8-7V7Zm10 0h4v4h-4c0 3 1 4 4 4v3c-5 0-8-2-8-7V7Z" />
              </svg>
              <p className="mt-4 text-[15px] leading-relaxed text-ink flex-1">
                {s.texto}
              </p>
              <div className="mt-5 pt-4 border-t border-[color:var(--line)]">
                <div className="font-extrabold text-leaf">{s.nome}</div>
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--muted-brand)] mt-1">
                  Depoimento modelo
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bloco 04: CTA intermediário -------------------- */
function CTAIntermediario() {
  return (
    <section className="bg-leaf text-paper-2">
      <div className="max-w-4xl mx-auto px-5 py-16 md:py-20 text-center">
        <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.05] text-paper-2">
          Se você chegou até aqui achando que pode ser o seu caso, dá pra
          descobrir em menos tempo do que leva pra fritar a primeira batata do
          turno.
        </h2>
        <div className="mt-8">
          <a
            href={CTA_ANCHOR}
            className="inline-flex items-center gap-3 rounded-2xl bg-paper-2 text-leaf px-8 py-5 font-display font-extrabold text-[17px] shadow-plate hover:bg-receipt transition-colors"
          >
            Quero descobrir qual prato está no vermelho
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bloco 05: Método -------------------- */
function Metodo() {
  const steps = [
    {
      n: "01",
      t: "Ficha técnica rápida",
      d: "Você lista os ingredientes do prato e a quantidade de cada um, do jeito que já usa na cozinha.",
    },
    {
      n: "02",
      t: "Cálculo automático do CMV",
      d: "O simulador soma o custo real de cada ingrediente e mostra o percentual que ele representa no preço de venda.",
    },
    {
      n: "03",
      t: "Semáforo de lucratividade",
      d: "Cada prato recebe vermelho, amarelo ou verde, então você enxerga o cardápio inteiro de uma vez, sem precisar entender fórmula nenhuma.",
    },
    {
      n: "04",
      t: "Preço sugerido",
      d: "Pra prato no vermelho ou amarelo, a ferramenta mostra o preço que colocaria aquele item na faixa verde, considerando a margem que você define.",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Como funciona
        </div>
        <h2 className="font-serif text-[36px] md:text-[48px] leading-[1] mt-4">
          Semáforo de Margem: três cores, uma decisão.
        </h2>
        <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[color:var(--muted-brand)]">
          Você digita os ingredientes de um prato e a quantidade de cada um.
          O simulador calcula o CMV — o custo real daquele prato específico —
          e mostra o resultado em três cores. <strong className="text-tomato">Vermelho</strong> é prato no prejuízo.{" "}
          <strong className="text-[#c99b1a]">Amarelo</strong> é margem apertada, sobrevivendo sem folga.{" "}
          <strong className="text-leaf-2">Verde</strong> é prato saudável, com espaço de lucro real.
          Não é opinião, é o cálculo puro em cima do que você mesmo informou.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <div key={s.n} className="paper-card rounded-3xl p-6 flex flex-col gap-3">
            <div className="font-serif text-[64px] leading-none text-[color:var(--receipt)]">
              {s.n}
            </div>
            <h3 className="font-display text-[20px] font-extrabold text-leaf">
              {s.t}
            </h3>
            <p className="text-[14px] text-[color:var(--muted-brand)] leading-relaxed">
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Bloco 06: Para quem é / não é -------------------- */
function ParaQuemE() {
  const paraQuem = [
    "Dono ou sócio de restaurante, lanchonete, hamburgueria ou self-service pequeno, que monta o preço do cardápio olhando o concorrente ou no instinto",
    "Quem já reajustou o preço de um insumo no boleto do fornecedor, mas nunca reajustou o preço do prato depois disso",
    "Quem tentou manter uma planilha de custo e parou de atualizar depois da segunda ou terceira semana",
    "Sócios que abriram o restaurante há pouco tempo e ainda não organizaram o financeiro entre os dois",
    "Quem quer lançar um prato novo no cardápio e não sabe que preço colocar sem chutar",
    "Dono de rede pequena com duas ou três unidades que desconfia que alguma loja vende prato no prejuízo sem ele saber",
  ];
  const naoE = [
    "Redes grandes que já têm sistema de gestão completo com módulo de custo integrado",
    "Quem procura curso longo de gestão financeira, não uma ferramenta de uso rápido",
    "Negócios fora do setor de alimentação, que não trabalham com ficha técnica de prato",
    "Quem não está disposto a informar o custo real dos próprios ingredientes na ferramenta",
  ];
  return (
    <section className="bg-[color:var(--paper-2)] border-y border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-[color:var(--paper)] border border-[color:var(--line)] p-8">
          <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
            Pra quem é
          </div>
          <h3 className="font-serif text-[28px] md:text-[32px] leading-tight mt-3">
            Se você se reconhece aqui, o Semáforo foi feito pro seu dia a dia.
          </h3>
          <ul className="mt-6 space-y-3">
            {paraQuem.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <span className="mt-1 w-5 h-5 rounded-full bg-leaf-2 text-paper-2 grid place-items-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-[color:var(--paper)] border border-[color:var(--line)] p-8">
          <div className="text-[12px] font-extrabold tracking-widest text-tomato uppercase">
            Pra quem não é
          </div>
          <h3 className="font-serif text-[28px] md:text-[32px] leading-tight mt-3">
            Se você está nestes casos, provavelmente não vai fazer sentido.
          </h3>
          <ul className="mt-6 space-y-3">
            {naoE.map((t) => (
              <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <span className="mt-1 w-5 h-5 rounded-full bg-tomato text-paper-2 grid place-items-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bloco 07 + 09: Entregáveis / Stack de valor -------------------- */
function Entregaveis() {
  const items = [
    {
      t: "Acesso ao Semáforo de Margem",
      d: "Ferramenta web de página única. Calcula o CMV de qualquer prato e mostra o resultado em vermelho, amarelo ou verde na hora.",
      v: "R$ 97",
    },
    {
      t: "Cálculo de preço sugerido por prato",
      d: "Pra todo item que cair no vermelho ou amarelo, a ferramenta mostra o preço que colocaria o prato na faixa verde, considerando a margem que você define.",
      v: "R$ 47",
    },
    {
      t: "Revisão ilimitada de cardápio",
      d: "Sem limite de pratos, sem limite de vezes que você recalcula. Toda vez que o fornecedor reajustar um insumo, você volta e refaz o cálculo.",
      v: "R$ 47",
    },
    {
      t: "Acesso único, sem mensalidade",
      d: "Você paga uma vez e usa o simulador quantas vezes quiser, para sempre.",
      v: "R$ 37",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          O que você leva
        </div>
        <h2 className="font-serif text-[36px] md:text-[48px] leading-[1] mt-4">
          Quatro componentes. Um pagamento único.
        </h2>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {items.map((i) => (
          <div key={i.t} className="paper-card rounded-3xl p-6 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-[20px] font-extrabold text-leaf">
                {i.t}
              </h3>
              <span className="text-[13px] font-extrabold uppercase tracking-widest text-[color:var(--muted-brand)] whitespace-nowrap">
                Vale {i.v}
              </span>
            </div>
            <p className="mt-3 text-[15px] text-[color:var(--muted-brand)] leading-relaxed">
              {i.d}
            </p>
          </div>
        ))}
      </div>

      {/* Stack de valor */}
      <div className="mt-10 rounded-3xl bg-[#fff8ea] border border-[color:var(--line)] overflow-hidden shadow-plate max-w-2xl mx-auto">
        <div className="bg-[#f0dfb8] px-5 py-3 flex items-center justify-between text-leaf font-extrabold">
          <span>Stack de valor</span>
          <span className="text-[12px] uppercase tracking-widest">recibo</span>
        </div>
        <div className="p-6 space-y-2 text-[15px]">
          {items.map((i) => (
            <div key={i.t} className="flex justify-between py-2 receipt-dashed font-bold">
              <span className="text-ink">{i.t}</span>
              <span className="text-leaf">{i.v}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4 mt-2 border-t-2 border-leaf font-display font-extrabold text-[17px]">
            <span className="text-ink">Valor total dos componentes</span>
            <span className="text-leaf">R$ 228</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bloco 10: Depoimentos completos -------------------- */
function DepoimentosCompletos() {
  const items = [
    {
      antes:
        "Tocava um restaurante de bairro havia três anos, usava planilha própria e achava que estava tudo sob controle, até o mês fechar com um resultado bem abaixo do esperado apesar do salão cheio.",
      virada:
        "Revisou o cardápio inteiro com o Semáforo de Margem numa tarde de segunda-feira, prato por prato.",
      resultado:
        "Descobriu que o prato principal, o mais pedido da casa, estava no vermelho havia quatro meses. Ajustou o preço e recuperou R$ 1.200 de margem já no mês seguinte.",
    },
    {
      antes:
        "Dividia a gestão do restaurante com o sócio, sem padrão definido de precificação, e vivia discussão sobre se o negócio realmente dava lucro.",
      virada:
        "Os dois sentaram juntos e rodaram o cardápio inteiro pelo simulador, olhando o mesmo número na tela.",
      resultado:
        "Encontraram dois pratos no amarelo e um no vermelho. Reajustaram os três em uma hora e pela primeira vez em oito meses fecharam o mês concordando sobre o resultado.",
    },
    {
      antes:
        "Administrava duas unidades pequenas e desconfiava que uma delas vendia prato no prejuízo, mas não tinha como provar isso sem abrir planilha separada pra cada loja.",
      virada:
        "Usou o simulador pra recalcular o cardápio das duas unidades no mesmo padrão, ainda no fim de semana.",
      resultado:
        "A unidade suspeita tinha três pratos vendidos abaixo do custo, um deles havia cinco meses. Corrigiu os preços nas duas lojas no mesmo dia.",
    },
  ];
  return (
    <section className="bg-[color:var(--paper-2)] border-y border-[color:var(--line)]">
      <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Antes · Virada · Resultado
        </div>
        <h2 className="font-serif text-[36px] md:text-[48px] leading-[1] mt-4 max-w-3xl">
          Não é sobre a ferramenta. É sobre o número certo aparecendo na tela.
        </h2>
        <div className="mt-10 space-y-6">
          {items.map((it, i) => (
            <div key={i} className="paper-card rounded-3xl p-6 md:p-8 grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[color:var(--muted-brand)]">
                  Antes
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink">{it.antes}</p>
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[color:var(--receipt)]">
                  Virada
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink">{it.virada}</p>
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-leaf-2">
                  Resultado
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink font-semibold">
                  {it.resultado}
                </p>
              </div>
            </div>
          ))}
          <p className="text-[12px] text-[color:var(--muted-brand)] italic">
            Depoimentos modelo. Substituir por depoimentos reais.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bloco 13: Autoridade -------------------- */
function Autoridade() {
  return (
    <section className="bg-leaf text-paper-2">
      <div className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        <div className="text-[12px] font-extrabold tracking-widest text-[color:var(--receipt)] uppercase">
          Quem criou
        </div>
        <h2 className="font-serif text-[36px] md:text-[48px] leading-[1] mt-4 text-paper-2">
          Feito por quem também sofre com esse problema na prática.
        </h2>
        <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-paper-2/90">
          <p>
            O Cardápio no Verde foi criado por quem também sofre com esse
            problema na prática, não só programou o cálculo e saiu vendendo.
          </p>
          <p>
            O criador administra duas unidades de uma rede de sanduíches natural,
            com cardápio próprio e ficha técnica de cada produto revisada por
            dentro, não por planilha terceirizada. Foi enfrentando o mesmo
            reajuste de fornecedor sem aviso, o mesmo prato que parecia vender
            bem mas escondia margem apertada, que a ferramenta nasceu.
          </p>
          <p>
            Não é um analista financeiro explicando teoria pra dono de
            restaurante. É alguém que fecha caixa, negocia com fornecedor e
            decide preço de cardápio na prática, todo mês, em loja de verdade.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Bloco 14: FAQ -------------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    {
      q: "Não tenho tempo pra mexer em mais uma ferramenta. Vale a pena?",
      a: "Calcular um prato leva menos de dois minutos. Um cardápio de quinze itens fica pronto numa tarde de domingo, não numa semana perdida entre um cliente e outro.",
    },
    {
      q: "R$ 59 é barato demais, deve ser fraco ou incompleto.",
      a: "O cálculo de CMV segue uma fórmula estável no setor de alimentação. O valor não está no algoritmo, está em entregar esse cálculo rápido e sem erro manual, sem cobrar mensalidade de sistema completo que um restaurante pequeno não usa inteiro.",
    },
    {
      q: "Já uso planilha, não preciso de outra coisa.",
      a: "Planilha comum não avisa quando o preço de um insumo sobe no fornecedor. Você continua vendendo pelo preço antigo até perceber o prejuízo no fim do mês, e nesse tempo já são semanas de prato saindo no vermelho.",
    },
    {
      q: "Meu restaurante é pequeno demais pra precisar disso.",
      a: "Quanto menor o negócio, menor a margem de erro no caixa. Restaurante pequeno não tem departamento financeiro pra absorver prato mal precificado por meses sem perceber, então é justamente o pequeno que mais sente esse impacto.",
    },
    {
      q: "Meu cardápio é muito específico, ferramenta genérica não vai entender.",
      a: "O simulador não assume ingrediente nem receita padrão. Ele calcula em cima do que você mesmo informa, então o resultado reflete o seu cardápio, seja qual for o tipo de comida.",
    },
    {
      q: "E se eu não souber calcular o rendimento de um ingrediente depois do preparo?",
      a: "Você lança o custo da embalagem e a quantidade usada no prato. Se um dia quiser refinar considerando perda de água, casca ou osso, o cálculo aceita esse ajuste, mas não é obrigatório pra começar.",
    },
    {
      q: "Preciso pagar mensalidade depois?",
      a: "Não. O acesso é único. Você paga uma vez e usa quantas vezes quiser, sempre que o cardápio ou o custo de um insumo mudar.",
    },
  ];
  return (
    <section className="max-w-4xl mx-auto px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
          Perguntas honestas
        </div>
        <h2 className="font-serif text-[36px] md:text-[48px] leading-[1] mt-4">
          Aquilo que você ia perguntar antes de comprar.
        </h2>
      </div>
      <div className="mt-10 space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="paper-card rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                aria-expanded={isOpen}
              >
                <span className="font-display font-extrabold text-[16px] md:text-[18px] text-ink">
                  {it.q}
                </span>
                <span
                  className={`w-9 h-9 rounded-full grid place-items-center bg-leaf text-paper-2 flex-shrink-0 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
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

/* -------------------- Bloco 15: Oferta final -------------------- */
function OfertaFinal() {
  const inclui = [
    "Acesso ao Semáforo de Margem, ferramenta web de página única",
    "Cálculo de preço sugerido para todo prato no vermelho ou amarelo",
    "Revisão ilimitada de cardápio, sem limite de pratos ou de vezes que você recalcula",
    "Acesso único, sem mensalidade, para sempre",
  ];
  return (
    <section id="oferta" className="bg-[color:var(--paper-2)] border-t border-[color:var(--line)]">
      <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
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
              <div className="text-[12px] font-extrabold tracking-widest text-leaf-2 uppercase">
                Oferta final
              </div>
              <h2 className="font-serif text-[36px] md:text-[52px] leading-[1] mt-4">
                O que você leva com o Cardápio no Verde
              </h2>
              <ul className="mt-6 space-y-3">
                {inclui.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] font-semibold text-ink">
                    <span className="mt-1 w-5 h-5 rounded-full bg-leaf-2 text-paper-2 grid place-items-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] text-[color:var(--muted-brand)] leading-relaxed">
                Valor total dos componentes: <strong>R$ 228</strong>. Corrigindo um único prato,
                isso se paga na primeira semana.
              </p>
            </div>

            {/* Recibo */}
            <div className="rounded-3xl bg-[#fff8ea] border border-[color:var(--line)] overflow-hidden shadow-plate">
              <div className="bg-[#f0dfb8] px-5 py-3 flex items-center justify-between text-leaf font-extrabold">
                <span>Cardápio no Verde</span>
                <span className="text-[12px] uppercase tracking-widest">recibo</span>
              </div>
              <div className="p-6">
                <div className="text-[13px] text-[color:var(--muted-brand)] font-bold">
                  Preço hoje · pagamento único
                </div>
                <div className="flex items-end gap-3 mt-1">
                  <span className="text-[color:var(--muted-brand)] line-through text-[20px] font-bold">
                    R$ 228
                  </span>
                  <span className="font-serif text-leaf text-[72px] leading-[0.8]">
                    R$ 59
                  </span>
                </div>
                <div className="text-[13px] text-[color:var(--muted-brand)] mt-2">
                  Uma única vez · sem mensalidade
                </div>
                <a
                  href="https://pay.exemplo.com/cardapio-no-verde"
                  className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-leaf text-paper-2 py-4 px-4 font-display font-extrabold text-[15px] text-center hover:bg-leaf-2 transition-colors"
                >
                  Quero descobrir qual prato está no vermelho
                  <span aria-hidden>→</span>
                </a>
                <div className="mt-3 text-center text-[11px] text-[color:var(--muted-brand)] leading-relaxed">
                  Ao continuar, você concorda com os termos de uso e a política
                  de privacidade.
                </div>
              </div>
            </div>
          </div>
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
            Feito por gente de restaurante, pra gente de restaurante.
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
        href={CTA_ANCHOR}
        className="flex items-center justify-center gap-3 rounded-2xl bg-leaf text-paper-2 px-5 py-4 font-display font-extrabold shadow-plate text-[14px] text-center"
      >
        Quero ver o custo real do meu cardápio
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
        <BulletsDemo />
        <DorSection />
        <ProvaCurta />
        <CTAIntermediario />
        <Metodo />
        <ParaQuemE />
        <Entregaveis />
        <DepoimentosCompletos />
        <Autoridade />
        <FAQ />
        <OfertaFinal />
      </main>
      <Rodape />
      <StickyMobileCTA />
    </div>
  );
}
