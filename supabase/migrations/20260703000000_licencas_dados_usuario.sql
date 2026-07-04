-- Licencas: liberadas/revogadas pelo webhook do Hotmart (via service_role, sem policy de escrita pra outros papeis)
create table if not exists public.licencas (
  email text primary key,
  status text not null default 'ativo' check (status in ('ativo', 'revogado')),
  origem_transacao text,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

alter table public.licencas enable row level security;

create policy "usuario ve a propria licenca"
  on public.licencas for select
  to authenticated
  using (email = auth.jwt() ->> 'email');

-- Dados do usuario: espelha o estado (S) do app, sincronizado pelo proprio cliente autenticado
create table if not exists public.dados_usuario (
  email text primary key,
  estado_json jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);

alter table public.dados_usuario enable row level security;

-- policy unica (nao criar outras em paralelo pra esta tabela: RLS permissiva combina com OR,
-- e uma policy so-de-email sem checar licenca abriria brecha pra usuario revogado continuar lendo/gravando)
create policy "so o proprio email com licenca ativa mexe nos dados"
  on public.dados_usuario for all
  to authenticated
  using (
    email = auth.jwt() ->> 'email'
    and exists (
      select 1 from public.licencas l
      where l.email = auth.jwt() ->> 'email' and l.status = 'ativo'
    )
  )
  with check (
    email = auth.jwt() ->> 'email'
    and exists (
      select 1 from public.licencas l
      where l.email = auth.jwt() ->> 'email' and l.status = 'ativo'
    )
  );
