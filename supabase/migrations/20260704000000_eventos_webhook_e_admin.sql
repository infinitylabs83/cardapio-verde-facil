-- Log de cada chamada do webhook do Hotmart, pro dono acompanhar na aba /admin
create table if not exists public.eventos_webhook (
  id bigint generated always as identity primary key,
  email text,
  evento text,
  sucesso boolean not null default true,
  detalhe text,
  criado_em timestamptz not null default now()
);

alter table public.eventos_webhook enable row level security;

create policy "admin ve tudo"
  on public.eventos_webhook for select
  to authenticated
  using (auth.jwt() ->> 'email' = 'gustavohgo0000@gmail.com');

-- o dono (admin) tambem pode ver todas as licencas, nao so a propria
create policy "admin ve todas as licencas"
  on public.licencas for select
  to authenticated
  using (auth.jwt() ->> 'email' = 'gustavohgo0000@gmail.com');
