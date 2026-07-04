import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// O app (Cardapio no Verde) e um arquivo estatico em public/app/index.html.
// A Cloudflare so serve arquivos estaticos com o caminho exato, entao essa rota
// existe so pra redirecionar a URL limpa "/app" pro arquivo real.
export const Route = createFileRoute("/app")({
  component: RedirecionaParaApp,
});

function RedirecionaParaApp() {
  useEffect(() => {
    window.location.replace("/app/index.html");
  }, []);
  return null;
}
