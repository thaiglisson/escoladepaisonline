# Changelog — Escola de Pais Online

Todas as alterações relevantes do projeto serão registradas neste arquivo.

O formato segue uma adaptação simples do padrão Keep a Changelog, organizado por versões e datas.

---

## [Não publicado]

## Feature 04B — Conteúdo da Página da Categoria Matemática

### Adicionado

- Hero definitivo da categoria Matemática.
- Artigo pilar oficial “Como explicar matemática para uma criança entender”.
- Seis artigos oficiais da Home do Blog, preservados na mesma ordem editorial.
- Categorias, títulos, resumos, slugs oficiais, CTAs e textos alternativos aprovados.
- Conteúdo definitivo do bloco da isca digital.
- Conteúdo definitivo do CTA do Explicador Matemático.

### Alterado

- Placeholders visíveis de `blog/matematica/index.html` substituídos pelo conteúdo editorial aprovado.
- Comentários temporários das imagens substituídos por orientações neutras para uma etapa futura.
- Implementação e limpeza realizadas exclusivamente em `blog/matematica/index.html`.
- Estrutura HTML da Feature 04A, CSS, JavaScript, Header Global, Footer Global, Home do Blog e Design System preservados.

### Validação

- Página validada visualmente em 390 px, 768 px e desktop.
- Grade responsiva validada com uma, duas e três colunas.
- Ausência de rolagem horizontal indevida confirmada.
- Exatamente seis cards e um H1 confirmados.
- Hierarquia H1, H2 e H3 validada.
- Slugs, títulos, resumos, categorias e textos alternativos conferidos com a Home do Blog.
- Header Global e Footer Global confirmados sem alterações.
- Menu mobile, navegação por teclado e fechamento pela tecla Esc validados.
- Ausência de textos provisórios no conteúdo visível confirmada.
- Console validado sem erros relacionados à implementação.
- Estrutura e conteúdo da Página da Categoria Matemática aprovados.

### Documentação

- Documentação Geral, Checklist do Projeto e CHANGELOG atualizados após a aprovação da Feature 04B.
- Próxima implementação definida como Feature 05A — Estrutura do Template de Artigo.

### Pendências intencionais

- As imagens definitivas dos artigos serão inseridas futuramente.
- As páginas dos artigos ainda não existem e serão criadas nas features de conteúdo.
- A Página da Categoria Matemática permanece temporariamente com `noindex, nofollow` e metadados provisórios.
- A landing page da isca digital ainda não foi implementada; o CTA permanece apontando para `/recursos/`.
- Formulário, captura de e-mail, SEO final, Open Graph, Schema.org, sitemap e liberação para indexação serão tratados em etapas futuras.
- Estas pendências fazem parte do planejamento e não representam erros da Feature 04B.

## Feature 04A — Estrutura da Página da Categoria Matemática

### Adicionado

- Estrutura HTML semântica da Página da Categoria Matemática em `blog/matematica/index.html`.
- Hero da categoria com breadcrumb, título, descrição e CTA.
- Card de artigo pilar em destaque.
- Grade responsiva preparada para seis artigos.
- Bloco visual da isca digital sem formulário.
- CTA do Explicador Matemático com reutilização do componente global.
- Espaços visuais preparados para receber as imagens definitivas em etapa futura.

### Implementado

- Layout mobile first alinhado ao Design System.
- Grade responsiva com uma, duas e três colunas.
- Artigo pilar com adaptação para duas colunas no desktop.
- Reutilização dos componentes, classes e padrões existentes na Home do Blog.
- Estilos estritamente necessários da página adicionados a `assets/css/blog.css`.
- Header Global, Footer Global e funcionalidades existentes preservados.
- Foco visível, navegação por teclado, controles adequados para toque e prevenção de rolagem horizontal.
- Compatibilidade com Cloudflare Pages preservada.

### Validação

- Estrutura HTML e CSS revisada e aprovada.
- Testes responsivos concluídos em 390 px, 768 px e desktop.
- Hero, breadcrumb, artigo pilar, grade de seis artigos, bloco da isca e CTA do produto validados.
- Menu mobile e navegação por teclado validados.
- Ausência de rolagem horizontal indevida confirmada.
- Console validado sem erros relacionados à implementação.

## Feature 03B — Conteúdo da Página Inicial do Blog

### Adicionado

- Planejamento Editorial definitivo da Home do Blog.
- Hero e CTA principal definitivos.
- Artigo pilar “Como explicar matemática para uma criança entender” em destaque.
- Seis artigos iniciais com títulos, resumos, categorias, slugs oficiais e CTAs.
- Textos alternativos aprovados para as futuras imagens dos artigos.
- Conteúdo definitivo do bloco da categoria Matemática.
- Texto auxiliar da pesquisa visual.
- Conteúdo definitivo do CTA do Explicador Matemático.

### Alterado

- Placeholders visíveis de `blog/index.html` substituídos pelo conteúdo editorial aprovado.
- Implementação realizada exclusivamente em `blog/index.html`.
- Estrutura HTML, CSS, Header Global, Footer Global e Design System preservados.

### Validação

- Página validada visualmente em desktop, tablet e celular.
- Responsividade e ausência de rolagem horizontal indevida aprovadas.
- Hero, artigo em destaque, categoria, seis cards e CTA do produto aprovados.
- Menu mobile e navegação por teclado aprovados.
- Links e slugs dos artigos conferidos.
- Campo e botão de pesquisa validados sem erros.
- Placeholders visuais das imagens aprovados.
- Ausência de textos provisórios no conteúdo visível confirmada.
- Console validado sem erros relacionados à implementação.

### Documentação

- Documentação Geral e Checklist do Projeto atualizados para registrar a conclusão da Feature 03B.
- Próxima implementação definida como a Página da Categoria Matemática em `/blog/matematica/`.

### Pendências intencionais

- As imagens definitivas dos artigos serão inseridas futuramente.
- As páginas dos artigos ainda não existem e serão criadas nas features de conteúdo.
- A Home permanece temporariamente com `noindex, nofollow` e metadados provisórios.
- A revisão de SEO, Open Graph, sitemap e liberação para indexação será realizada em uma etapa específica antes da publicação indexável.
- Estas pendências fazem parte do planejamento e não representam erros da Feature 03B.

## Feature 03A — Estrutura da Página Inicial do Blog

### Adicionado

- Estrutura HTML semântica da Página Inicial do Blog em `blog/index.html`.
- Hero do Blog com subtítulo institucional, título, descrição e CTA.
- Barra de pesquisa visual preparada para evolução futura.
- Card de artigo em destaque.
- Bloco da categoria Matemática.
- Grade com seis cards provisórios de artigos recentes.
- CTA do Explicador Matemático com título, descrição, lista e botão.
- Arquivo `assets/css/blog.css` com os estilos específicos da página.
- Integração do `blog.css` ao `blog/index.html`.
- Espaços de imagem preparados para receber o conteúdo definitivo na Feature 03B.

### Implementado

- Layout mobile first alinhado ao Design System.
- Grade responsiva com uma, duas e três colunas.
- Artigo em destaque com adaptação para duas colunas no desktop.
- Fallback visual para imagens ainda não definidas.
- Reutilização do Header Global, Footer Global e componentes existentes.
- Foco visível, controles adequados para toque e prevenção de rolagem horizontal.

### Validação

- Estrutura HTML e CSS revisada e aprovada.
- Testes responsivos concluídos em 390 px, 768 px e desktop.
- Layout validado em celular, tablet e desktop.
- Grade, cards, campos e botões validados nas larguras previstas.
- Ausência de erros de carregamento do `blog.css` no navegador.

## Feature 01 — Header Global

### Adicionado
- Implementado Header Global reutilizável para todo o projeto.
- Criado componente `templates/components/header.html`.
- Navegação desktop responsiva.
- Navegação mobile com menu hambúrguer.
- Botão CTA "Conhecer o Explicador Matemático".
- Logo horizontal da marca integrada ao Header.
- Suporte a imagens WebP com fallback para PNG.
- Header fixo (sticky).
- Estrutura HTML semântica com atributos de acessibilidade (ARIA).
- JavaScript puro para abertura e fechamento do menu mobile.
- Fechamento automático do menu ao selecionar um link.
- Fechamento do menu pela tecla ESC.
- Compatibilidade com Cloudflare Pages.

## Feature 02 — Footer Global

### Adicionado

- Componente reutilizável `templates/components/footer.html`.
- Integração do Footer ao template `templates/layouts/base.html`.
- Seção de marca com logo e descrição institucional.
- Grupos de links de Navegação e Institucional.
- CTA “Conhecer o Explicador Matemático”.
- Área inferior com copyright e aviso educacional.
- Estilos responsivos no `assets/css/global.css`.
- Layout mobile first.
- Acessibilidade por teclado e foco visível.
- Reutilização do botão global.
- Uso exclusivo das variáveis do Design System.

### Validação

- Testes em desktop, tablet e celular.
- Validação em 390 px e 768 px.
- Rolagem e responsividade aprovadas.
- Navegação por Tab e Enter aprovada.
- Links, logo e CTA testados.
- Integração com Header Global e template base aprovada.
- Ausência de erros do componente no Console.

### Próximas implementações

- Header Global. Status: ✅ Concluído
- Footer Global. Status: ✅ Concluído
- Feature 03A — Estrutura da Página Inicial do Blog. Status: ✅ Concluída
- Feature 03B — Conteúdo da Página Inicial do Blog. Status: ✅ Concluída
- Feature 04A — Estrutura da Página da Categoria Matemática. Status: ✅ Concluída
- Feature 04B — Conteúdo da Página da Categoria Matemática. Status: ✅ Concluída
- Testes realizados em ambiente local (Live Server) e aprovados antes do deploy.
- Feature 05A — Estrutura do Template de Artigo
- Páginas institucionais

---

## [1.0.0-foundation] — 2026-07-12

### Adicionado

- Estrutura inicial de diretórios do projeto.
- Estrutura da pasta `assets/`.
- Estrutura da pasta `templates/`.
- Pastas iniciais do blog e das páginas institucionais.
- Arquivo `assets/css/global.css`.
- Arquivo `templates/layouts/base.html`.
- Arquivos-base `assets/css/blog.css` e `assets/css/artigo.css`.
- Arquivos-base `assets/js/main.js` e `assets/js/analytics.js`.
- Estrutura de favicons e `site.webmanifest`.

### Documentação

- Documentação Geral atualizada.
- Checklist operacional do blog atualizado.
- Manual de Design e Interface criado.
- Parte 1 do Manual de Design concluída.
- Parte 2 do Manual de Design concluída.
- Checklist de revisão de arquivos acrescentado ao Manual.

### Definições consolidadas

- Paleta oficial da marca.
- Tipografia baseada em fontes do sistema.
- Containers, grids e espaçamentos globais.
- Padrões de botões, cards, formulários, header, footer e CTAs.
- Regras de responsividade, acessibilidade e desempenho.
- Template mestre com SEO básico, Open Graph, Twitter Card e favicons.

### Validação

- Deploy realizado pelo GitHub e Cloudflare Pages.
- URLs iniciais abertas com sucesso:
  - `/blog/`
  - `/blog/matematica/`
  - `/sobre/`
  - `/contato/`
  - `/politica-de-privacidade/`
  - `/termos-de-uso/`

### Observação

As páginas iniciais permanecem sem conteúdo visual porque ainda utilizam arquivos HTML mínimos. A implementação dos componentes globais começa pela Feature 01 — Header Global.

### Versionamento

- Commit principal realizado e enviado para o GitHub.
- Release oficial publicada no GitHub.
- Tag criada: `v1.0-foundation`.
- Primeiro marco oficial do projeto registrado.
- Backup local recomendado após a publicação da versão Foundation.

---

## Como atualizar este arquivo

Atualizar o changelog quando ocorrer uma mudança relevante, como:

- conclusão de uma feature;
- criação de uma página;
- mudança de arquitetura;
- alteração importante no Design System;
- integração de formulário, analytics ou plataforma externa;
- correção de bug relevante;
- publicação de uma nova versão.

Não registrar ajustes mínimos de texto, formatação ou testes temporários.

### Categorias recomendadas

- `Adicionado`
- `Alterado`
- `Corrigido`
- `Removido`
- `Segurança`
- `Documentação`
- `Validação`
