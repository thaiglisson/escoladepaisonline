# Changelog — Escola de Pais Online

Todas as alterações relevantes do projeto serão registradas neste arquivo.

O formato segue uma adaptação simples do padrão Keep a Changelog, organizado por versões e datas.

---

## [Não publicado]

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
- Página inicial do Blog
- Categoria Matemática
- Template de artigo
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
