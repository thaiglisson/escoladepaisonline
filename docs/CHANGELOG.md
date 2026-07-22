# Changelog — Escola de Pais Online

Todas as alterações relevantes do projeto serão registradas neste arquivo.

O formato segue uma adaptação simples do padrão Keep a Changelog, organizado por versões e datas.

---

## [Não publicado]

## Feature 06 — Conteúdo Inicial do Cluster Matemática

**Data:** 21 de julho de 2026

### Resumo

- Conclusão da primeira fase editorial do Cluster Matemática.
- Publicação de sete artigos complementares ao artigo pilar.
- Cobertura dos quatro conteúdos de operação, dois conteúdos de dor emocional e um guia de atividades para fazer em casa.
- Conexão editorial entre os oito artigos por links internos contextuais e artigos relacionados.

### Arquivos criados

- `blog/matematica/eu-sei-a-resposta-mas-nao-sei-explicar-matematica/index.html`.
- `blog/matematica/como-ensinar-soma-para-criancas/index.html`.
- `blog/matematica/como-ensinar-subtracao-para-criancas/index.html`.
- `blog/matematica/como-ensinar-multiplicacao-para-criancas-sem-decorar-a-tabuada/index.html`.
- `blog/matematica/como-ensinar-divisao-para-criancas-de-forma-simples/index.html`.
- `blog/matematica/toda-tarefa-de-matematica-vira-estresse/index.html`.
- `blog/matematica/atividades-de-matematica-para-fazer-em-casa/index.html`.

### Arquivos modificados

- `blog/matematica/template-artigo.html` — referência principal do favicon padronizada para SVG.
- `blog/matematica/como-explicar-matematica-para-criancas/index.html` — referência principal do favicon padronizada para SVG.
- `docs/Documentacao_Projeto_Escola_de_Pais_Online.md` — status, percentuais, resumo técnico, entregáveis, validações e próximos passos atualizados.
- `docs/Checklist_Projeto_Blog_Escola_de_Pais_Online.md` — implementação, testes, validação e conclusão da Feature 06 registrados.
- `docs/CHANGELOG.md` — registro oficial da Feature 06 adicionado.

### Melhorias implementadas

- Template Oficial de Artigos reutilizado em todos os novos conteúdos sem alteração de CSS, JavaScript ou componentes globais.
- Componente “Resumo rápido” aplicado com cinco orientações em cada artigo.
- Conteúdos originais e complementares organizados para evitar sobreposição de intenção de busca.
- Artigos emocionais escritos com acolhimento, redução da culpa e orientações práticas.
- Artigos das operações estruturados para explicar o significado antes dos procedimentos escolares.
- Guia de atividades cotidianas criado com propostas curtas e sem materiais específicos.
- CTAs contextuais do Explicador Matemático inseridos com linguagem natural.
- FAQ, bloco da isca, artigos relacionados e CTA final preservados no padrão oficial.
- Favicon SVG padronizado com referências PNG, Apple Touch Icon e `site.webmanifest` preservadas.
- `noindex, nofollow` mantido, sem canonical, Schema.org ou Open Graph definitivo.

### Validações executadas

- HTML semântico, hierarquia de títulos e apenas um H1 por artigo confirmados.
- Resumo rápido, índice, conteúdo, CTAs, bloco da isca, FAQ, artigos relacionados e Footer conferidos.
- Links internos, botões, destinos relacionados e arquivos de favicon testados.
- Leitura validada em 390 px, 768 px e 1440 px.
- Ausência de rolagem horizontal confirmada.
- Console validado sem erros relacionados à implementação.
- Ausência de placeholders de texto confirmada.
- Header Global, Footer Global, CSS, JavaScript e componentes globais preservados.

### Documentação

- Fase de Conteúdo atualizada de 15% para 100%.
- Percentual geral estimado do projeto atualizado de 63% para 78%.
- Feature 06 e Fase de Conteúdo Inicial registradas como concluídas.
- Próxima implementação definida como a área de Recursos Gratuitos.

### Pendências intencionais

- Imagens definitivas dos artigos.
- SEO final, canonical, Open Graph e Schema.org.
- Liberação para indexação e atualização final do sitemap.
- Implementação da área de Recursos Gratuitos, landing page da isca e Página de Obrigado.
- Captura de e-mail e automação.
- Páginas institucionais restantes.
- Estas pendências fazem parte do planejamento e não representam erros da Feature 06.

## Feature 05 — Template de Artigo e Primeiro Artigo Pilar

### Adicionado

- Template oficial reutilizável dos artigos.
- Breadcrumb.
- Cabeçalho editorial.
- Imagem principal preparada.
- Índice opcional.
- Estrutura completa de conteúdo.
- CTA contextual.
- Bloco da isca digital.
- FAQ.
- Artigos relacionados.
- CTA final.
- Primeiro artigo pilar: “Como explicar matemática para uma criança entender”.
- Novo componente editorial: “Resumo rápido”.

### Alterado

- Criação do primeiro artigo utilizando o Template oficial.
- Padronização do componente “Resumo rápido” em todos os artigos futuros.
- Template oficial definido como estrutura obrigatória para as próximas publicações do blog.

### Validação

- Apenas um H1 confirmado.
- HTML semântico validado.
- Estrutura reutilizável aprovada.
- Ausência de rolagem horizontal confirmada.
- Testes concluídos em 390 px.
- Testes concluídos em 768 px.
- Desktop aprovado.
- Console validado sem erros relacionados à implementação.
- FAQ funcional.
- CTAs funcionais.
- Acessibilidade preservada.
- Template e artigo utilizando exatamente a mesma estrutura do componente “Resumo rápido”.

### Documentação

- Documentação Geral, Checklist do Projeto e CHANGELOG atualizados após a aprovação da Feature 05.
- Feature 05A e Feature 05B registradas como concluídas.
- Percentual geral estimado do projeto atualizado para 63%.
- Próxima implementação definida como a criação dos artigos restantes previstos para a Home e para a Categoria Matemática.

### Pendências intencionais

- Imagens definitivas.
- SEO final.
- Open Graph.
- Schema.org.
- Canonical.
- Liberação para indexação.
- Sitemap final.
- Captura de e-mail.
- Landing Page da Isca.
- Páginas institucionais restantes.
- Estas pendências fazem parte do planejamento e não representam erros da Feature 05.

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
- Feature 05A — Estrutura do Template de Artigo. Status: ✅ Concluída
- Feature 05B — Conteúdo do Primeiro Artigo Pilar. Status: ✅ Concluída
- Próxima implementação: artigos restantes previstos para a Home e para a Categoria Matemática.
- Na sequência: Recursos Gratuitos, Landing Page da Isca, Página de Obrigado, páginas institucionais, captura de e-mail, SEO final e liberação para indexação.

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
