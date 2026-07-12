## Documentos Oficiais do Projeto

Este projeto possui três documentos oficiais que devem ser considerados em conjunto durante qualquer implementação.

1. Documentacao_Projeto_Escola_de_Pais_Online_v3_atualizada.md
   Arquitetura, infraestrutura, SEO, fluxo do projeto e decisões técnicas.

2. Checklist_Projeto_Blog_Escola_de_Pais_Online.md
   Ordem prática de implementação do blog.

3. Manual_de_Design_e_Interface_Escola_de_Pais_Online.md
   Identidade visual, UX/UI, componentes reutilizáveis e padrões de interface.

Nenhuma implementação deverá contrariar estes documentos sem atualização prévia da documentação.



PARTE 1 — Fundamentos
1. Objetivo da Interface
Missão

A interface da Escola de Pais Online deve transmitir confiança, simplicidade e acolhimento, ajudando pais e responsáveis a encontrarem rapidamente uma solução prática para ensinar matemática aos filhos.

O visitante deve sentir que encontrou alguém capaz de ajudá-lo, e não uma plataforma complicada.

A tecnologia existe para facilitar o ensino, não para chamar atenção.

Objetivos da Interface

Toda página deve cumprir cinco objetivos:

transmitir confiança imediatamente;
facilitar a leitura;
reduzir distrações;
orientar naturalmente a navegação;
conduzir o visitante até a próxima ação.

Toda página deve responder rapidamente:

O que é isso?
Como isso me ajuda?
O que devo fazer agora?
A interface NÃO deve parecer
infantil;
acadêmica;
técnica;
complicada;
cheia de efeitos;
semelhante a um portal de notícias.
2. Personalidade da Marca

A Escola de Pais Online comunica conhecimento de forma acessível.

A personalidade da marca deve transmitir:

acolhimento;
clareza;
organização;
confiança;
simplicidade;
proximidade;
humanidade.

Nunca deve transmitir:

arrogância;
excesso de formalidade;
aparência escolar tradicional;
excesso de tecnologia;
excesso de elementos decorativos.
Emoção desejada

Durante toda a navegação o visitante deve sentir:

tranquilidade;
segurança;
esperança;
confiança;
clareza.
3. Público e Contexto de Uso
Público principal

Pais e responsáveis por crianças de 6 a 9 anos.

Grande parte:

sabe resolver contas;
não sabe explicá-las;
possui pouco tempo;
utiliza o celular como principal dispositivo.
Contexto de uso

A maioria acessará:

📱 Smartphone (prioridade máxima)

Depois:

💻 Notebook

Por último:

🖥 Desktop

Todo componente deverá ser pensado primeiro para telas pequenas.

Velocidade

A experiência deve priorizar:

carregamento rápido;
poucas dependências externas;
HTML estático;
CSS leve;
JavaScript mínimo.
4. Princípios de Design

Toda decisão visual deverá seguir estes princípios.

Clareza

Cada seção deve possuir apenas um objetivo principal.

Simplicidade

Sempre escolher a solução mais simples.

Evitar componentes desnecessários.

Consistência

Botões iguais devem parecer iguais.

Cards iguais devem parecer iguais.

Menus iguais devem parecer iguais.

Não criar múltiplos estilos para o mesmo componente.

Leitura

Os textos devem ser confortáveis.

Priorizar:

bastante espaço em branco;
largura reduzida de leitura;
boa hierarquia tipográfica.
Confiança

O design deve transmitir estabilidade.

Nada deve parecer improvisado.

5. Identidade Visual

A identidade visual da Escola de Pais Online baseia-se em cinco conceitos.

Clareza

Tudo deve parecer fácil de entender.

Acolhimento

A marca conversa com pais.

Nunca com especialistas.

Educação

O ambiente deve lembrar aprendizado.

Nunca uma escola tradicional.

Tecnologia discreta

A tecnologia é o meio.

A solução é o protagonista.

Humanização

A personagem ilustrada representa a marca.

Ela transmite:

proximidade;
confiança;
simpatia;
conhecimento.

Ela pode aparecer em:

banners;
blog;
landing pages;
materiais ricos;
anúncios.

Ela nunca substitui a logo.

6. Paleta Oficial

A paleta foi definida a partir da identidade visual já existente (logo, página de vendas, banners e aplicativo).

Cores oficiais
Papel	Variável	HEX	Uso
Verde Principal	--color-primary	#178F3E	Botões principais, CTAs, ações
Verde Hover	--color-primary-hover	#117333	Hover dos botões
Verde Claro	--color-primary-light	#EEF9F1	Fundos positivos
Azul Institucional	--color-secondary	#174F78	Links, identidade, detalhes
Azul Escuro	--color-heading	#082B4B	Títulos principais
Laranja Destaque	--color-accent	#F7AE24	Ícones e pequenos destaques
Texto Principal	--color-text	#222A26	Texto corrido
Texto Secundário	--color-text-light	#59645F	Apoio e descrições
Fundo Principal	--color-background	#FFFFFF	Fundo do site
Fundo Alternativo	--color-surface	#F8FAF9	Seções alternadas
Bordas	--color-border	#DFE5E1	Cards, inputs e divisórias
Regras

O verde é a cor principal da marca.

O azul reforça credibilidade.

O laranja é exclusivo para pequenos destaques.

O branco faz parte da identidade visual.

Evitar fundos escuros em páginas internas.

7. Tipografia
Fonte oficial

Na primeira versão do projeto será utilizada apenas a pilha de fontes do sistema.

font-family:
system-ui,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Roboto,
Helvetica,
Arial,
sans-serif;
Justificativa
excelente legibilidade;
nenhuma dependência externa;
melhor desempenho;
melhor Core Web Vitals;
aparência consistente entre Windows, macOS, Android e iOS.
Hierarquia
H1

Muito destacado.

Utilizado apenas uma vez por página.

H2

Seções principais.

H3

Subseções.

Texto

Leitura confortável.

Evitar blocos excessivamente largos.

Botões

Texto forte.

Objetivo.

Sempre em linguagem de ação.

8. Espaçamento e Grid
Filosofia

O espaço em branco faz parte da identidade visual.

Não preencher áreas apenas para "parecer completo".

Largura

Páginas institucionais:

1100–1200 px

Artigos:

700–800 px

Landing pages:

largura variável conforme o conteúdo.

Espaçamento

Utilizar poucos valores padronizados.

Nunca criar espaçamentos aleatórios.

Todo componente deve seguir o mesmo ritmo visual.

Grid

O conteúdo deverá permanecer centralizado.

Layouts complexos devem ser evitados.

Resultado Esperado

Ao concluir esta primeira fase, qualquer desenvolvedor ou designer deverá compreender:

a personalidade da marca;
os objetivos da interface;
o público para quem projetamos;
a identidade visual;
a paleta oficial;
a tipografia;
a organização do layout.

Sem necessidade de consultar código ou exemplos visuais.

Próxima Etapa

PARTE 2 — Componentes

Nela serão definidos oficialmente:

Header
Footer
Navegação
Botões
Cards
Formulários
Breadcrumbs
Listas
Tabelas
Blocos de CTA
Componentes reutilizáveis



PARTE 2 — Componentes da Interface
Objetivo

Esta seção define os componentes reutilizáveis da interface da Escola de Pais Online.

Todos os componentes deverão seguir os princípios definidos na Parte 1.

Nenhum componente poderá ser criado fora deste padrão sem atualização deste manual.

9. Filosofia dos Componentes

Todos os componentes devem seguir cinco princípios.

Simplicidade

Cada componente deve possuir apenas uma função principal.

Evitar excesso de informações.

Consistência

Um componente deve parecer igual em qualquer página.

Botões iguais.

Cards iguais.

Formulários iguais.

Menus iguais.

Legibilidade

A leitura sempre possui prioridade sobre decoração.

Acessibilidade

Todos os componentes devem possuir:

contraste adequado;
foco visível;
tamanho confortável para toque;
funcionamento por teclado quando aplicável.
Desempenho

Evitar:

animações pesadas;
sombras exageradas;
efeitos complexos.
10. Containers
Container Principal

Utilizado em praticamente todas as páginas.

Largura máxima:

1200 px

Container de Leitura

Utilizado em:

artigos
política
termos
páginas institucionais

Largura:

700–800 px

Hero

Largura máxima:

aproximadamente 960 px

Sempre centralizado.

11. Header

O Header será compartilhado por todo o projeto.

Estrutura

Logo

↓

Menu

↓

Botão CTA

Menu Desktop

Itens:

Início
Blog
Matemática
Recursos
Sobre

Botão:

Conhecer o Explicador Matemático

Menu Mobile

Utilizar menu hamburguer.

Priorizar simplicidade.

Comportamento

Header fixo (sticky).

Deve permanecer visível durante a navegação.

Altura

Desktop:

72–80 px

Mobile:

64–72 px

12. Footer

O Footer será único.

Todas as páginas utilizarão exatamente o mesmo.

Estrutura

Logo

↓

Descrição

↓

Links rápidos

↓

Institucional

↓

Copyright

Links

Sobre

Contato

Blog

Política

Termos

Redes sociais

Quando existirem.

Nunca destacar mais que o CTA principal.

13. Botões

Todos os botões deverão seguir exatamente este padrão.

Botão Primário

Cor:

Verde Principal

Uso:

Principal ação da página.

Texto

Sempre verbo de ação.

Exemplos:

Conhecer o Explicador Matemático

Quero ajudar meu filho

Baixar Material

Ler Artigo

Hover

Verde escuro.

Radius

Arredondamento médio.

Altura

Nunca inferior a 44 px.

Largura

Sempre confortável para toque.

Botão Secundário

Utilizado para ações menos importantes.

Fundo branco.

Borda verde.

Texto verde.

Botão Texto

Sem fundo.

Sem borda.

Usado apenas em links internos.

14. Cards

Todos os cards seguem a mesma filosofia.

Card de Artigo

Contém:

Imagem

↓

Categoria

↓

Título

↓

Resumo

↓

Botão "Ler artigo"

Card de Produto

Imagem

↓

Título

↓

Descrição

↓

CTA

Card de Depoimento

Texto

↓

Nome

↓

Identificação

Aparência

Fundo branco.

Borda suave.

Pouca sombra.

Muito espaço interno.

15. Formulários

Priorizar poucos campos.

Nunca solicitar informação desnecessária.

Campos

Nome

Email

Botão

Nada além disso para iscas digitais.

Inputs

Bordas suaves.

Altura confortável.

Boa área de clique.

Mensagens

Erro

Sucesso

Carregando

Sempre claras.

16. Navegação

A navegação deve ser simples.

O visitante nunca deve ficar perdido.

Breadcrumb

Obrigatório em:

Categorias

Artigos

Recursos

Formato

Início

Blog

Categoria

Artigo

17. CTAs

Toda página deverá possuir apenas um CTA principal.

Os demais devem apoiar esse objetivo.

CTA Principal

Botão verde.

Maior destaque.

CTA Secundário

Menor destaque.

Localização

Preferencialmente:

Hero

↓

Após conteúdo principal

↓

Final da página

18. Listas

Priorizar:

✔ listas curtas

✔ bullets simples

✔ espaçamento confortável

19. Tabelas

Somente quando realmente agregarem informação.

Evitar tabelas grandes.

20. Imagens

As imagens devem transmitir:

acolhimento

proximidade

aprendizado

família

confiança

Evitar:

bancos de imagem genéricos

professores em sala de aula

crianças isoladas

ambientes corporativos

21. Ícones

Estilo:

simples

outline ou sólido discreto

Evitar:

ícones muito coloridos

ícones 3D

ícones decorativos

22. Espaçamento dos Componentes

Todo componente deve possuir:

boa área interna

boa separação entre elementos

respiro visual

23. Sombras

As sombras devem ser discretas.

Utilizadas apenas para:

Cards

Header

Dropdowns

Modais

Nunca utilizar sombras muito fortes.

24. Bordas

Raio padrão médio.

Utilizar raio maior apenas em:

Hero

Cards especiais

Blocos de CTA

25. Responsividade

Todo componente nasce para mobile.

Depois adapta para desktop.

Nunca o contrário.

Checklist da Parte 2

Antes de um componente ser considerado pronto, verificar:

segue a paleta oficial;
utiliza a tipografia oficial;
respeita os espaçamentos;
possui foco visível;
funciona em dispositivos móveis;
possui apenas uma função principal;
está consistente com os demais componentes;
segue os princípios definidos na Parte 1.


26. Checklist de Revisão de Arquivos

Nenhum arquivo de interface deve ser considerado concluído ou enviado ao repositório antes de passar por esta revisão.

26.1 Revisão de HTML
 Utiliza HTML5 semântico.
 Possui lang="pt-BR".
 Possui apenas um <h1>.
 A hierarquia de títulos segue a ordem correta: H1, H2 e H3.
 Imagens informativas possuem texto alternativo.
 Links e botões possuem textos claros e descritivos.
 Elementos interativos podem ser utilizados por teclado.
 O conteúdo principal está dentro de <main>.
 Header, main e footer estão corretamente organizados.
 Não há conteúdo fictício ou textos provisórios em páginas publicadas.
 Não existem links vazios ou com destino # sem função real.
26.2 Revisão de SEO
 O <title> é único e descreve a página.
 A meta description é única.
 A URL canônica corresponde à página.
 Open Graph possui título, descrição, URL e imagem.
 As metatags sociais usam informações da página.
 A diretiva de indexação é adequada ao tipo de página.
 A página possui favicon e identidade visual do projeto.
 O endereço da página segue o padrão oficial de URLs.
 A página será adicionada ao sitemap quando for publicada e indexável.
26.3 Revisão de CSS
 Utiliza as variáveis definidas no global.css.
 Respeita a paleta oficial.
 Utiliza a tipografia oficial do sistema.
 Não repete estilos globais em arquivos específicos.
 Não cria valores de cores desnecessários fora da paleta.
 Não cria espaçamentos aleatórios sem justificativa.
 O código está organizado e comentado.
 Os nomes das classes são claros e consistentes.
 O CSS específico da página não altera componentes globais sem necessidade.
 Não utiliza frameworks ou dependências externas sem aprovação.
26.4 Revisão de responsividade
 A implementação foi pensada primeiro para celular.
 Funciona em telas pequenas sem rolagem horizontal indevida.
 Botões possuem área de toque confortável.
 Textos permanecem legíveis em celular.
 Imagens não ultrapassam a largura disponível.
 Grids e colunas se reorganizam corretamente.
 Header e menu funcionam em celular e computador.
 Tabelas possuem tratamento para telas pequenas.
26.5 Revisão de acessibilidade
 O contraste entre texto e fundo é suficiente.
 O foco do teclado é visível.
 Botões não dependem apenas de cor para transmitir sua função.
 Campos de formulário possuem rótulos.
 Mensagens de erro são claras.
 Imagens decorativas não recebem descrições desnecessárias.
 A ordem de navegação é lógica.
 Animações respeitam prefers-reduced-motion.
26.6 Revisão de desempenho
 Não existem bibliotecas desnecessárias.
 O JavaScript utilizado é mínimo.
 Imagens possuem dimensões adequadas.
 Imagens abaixo da primeira tela podem usar carregamento tardio.
 Não há fontes externas sem necessidade.
 Os arquivos CSS e JavaScript são carregados apenas quando necessários.
 Não existem arquivos duplicados ou referências quebradas.
26.7 Revisão funcional
 Todos os links foram testados.
 Todos os botões foram testados.
 Formulários apresentam estados de sucesso, erro e carregamento.
 A navegação funciona em janela anônima.
 A página foi testada em celular e computador.
 O console do navegador não apresenta erros.
 O resultado visual está de acordo com o Manual de Design.
Status dos arquivos

Utilizar os seguintes estados durante a implementação:

Não iniciado
Em desenvolvimento
Em revisão
Aprovado
Publicado

Somente arquivos com status Aprovado podem entrar no commit destinado à publicação.



