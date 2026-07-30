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



# PARTE 3 — Sistema Visual do Blog

## Objetivo

Esta parte complementa os fundamentos e os componentes definidos nas Partes 1 e 2 e estabelece o sistema oficial para a produção de imagens da Escola de Pais Online.

Este manual passa a ser a referência única do Design System da Escola de Pais Online. Toda imagem, ilustração, capa, miniatura, banner, material promocional ou peça para redes sociais deverá respeitar integralmente as três partes deste documento.

As regras desta parte se aplicam a designers, desenvolvedores, redatores, ferramentas de criação, inteligências artificiais e qualquer pessoa ou sistema responsável pela produção visual do projeto.

Em caso de dúvida ou conflito:

1. prevalecem a identidade visual, a paleta e a tipografia definidas na Parte 1;
2. prevalecem os padrões de componentes, acessibilidade e responsividade definidos na Parte 2;
3. aplicam-se as regras específicas de imagens e templates definidas nesta parte;
4. nenhuma exceção poderá ser adotada como novo padrão sem aprovação e atualização prévia deste manual.

## 27. Filosofia das Imagens

Todas as imagens da Escola de Pais Online devem transmitir:

- acolhimento;
- confiança;
- simplicidade;
- proximidade;
- aprendizado;
- organização.

A imagem deve ajudar o visitante a compreender o tema, reconhecer a marca e avançar para a próxima ação. A função da imagem nunca é apenas preencher espaço.

### 27.1 Princípios obrigatórios

Todas as imagens devem:

- parecer parte da mesma família visual;
- evitar aparência de banco de imagens genérico;
- funcionar bem em desktop e mobile;
- reforçar o reconhecimento da marca;
- priorizar clareza em vez de excesso de elementos;
- possuir um assunto principal facilmente reconhecível;
- manter espaço suficiente para títulos, logo e demais elementos previstos no template;
- utilizar apenas a paleta oficial, admitindo variações de opacidade das cores oficiais quando necessárias;
- preservar legibilidade, contraste e hierarquia mesmo em tamanho reduzido;
- respeitar a experiência mobile first definida na Parte 1.

### 27.2 Direção visual

A família visual deve combinar:

- fundos claros, preferencialmente branco, Fundo Alternativo ou Verde Claro;
- Verde Principal como cor de ação e reconhecimento;
- Azul Institucional e Azul Escuro para estrutura, confiança e títulos;
- Laranja Destaque somente em pequenos pontos de atenção;
- formas geométricas simples e discretas;
- ilustrações vetoriais limpas;
- ícones simples;
- áreas de respiro generosas;
- elementos educacionais ou matemáticos usados com moderação.

### 27.3 O que evitar

Não utilizar:

- fotografias genéricas de famílias, professores ou crianças em poses artificiais;
- salas de aula tradicionais como representação principal da marca;
- crianças isoladas ou em situações que transmitam dificuldade, medo ou constrangimento;
- ambientes corporativos;
- colagens excessivas;
- excesso de texto;
- excesso de cores;
- elementos decorativos sem função;
- fundos visualmente carregados;
- efeitos 3D, brilhos, reflexos ou sombras pesadas;
- representações estereotipadas, constrangedoras ou excludentes;
- imagens geradas por IA com mãos, rostos, letras, números ou objetos inconsistentes;
- imagens que dependam de detalhes muito pequenos para serem compreendidas.

### 27.4 Uso de fotografia

O sistema visual prioriza ilustração. Fotografias somente poderão ser utilizadas quando forem autênticas, necessárias ao conteúdo e previamente aprovadas.

Quando utilizadas, as fotografias deverão:

- mostrar situações naturais de apoio, vínculo e aprendizado;
- respeitar a privacidade e os direitos de imagem;
- possuir iluminação clara e acolhedora;
- evitar poses publicitárias ou aparência de banco de imagens;
- receber composição compatível com a paleta e os templates oficiais;
- nunca expor uma criança a situação vexatória, perigosa ou emocionalmente negativa.

## 28. Sistema Oficial de Templates

Os templates são estruturas reutilizáveis. Eles asseguram consistência, aceleram a produção e reduzem decisões visuais arbitrárias.

As dimensões indicadas são dimensões de produção. Quando uma plataforma exigir outro tamanho, a arte deverá ser adaptada sem alterar sua hierarquia, sua identidade ou sua área segura.

### 28.1 Regras comuns a todos os templates

Todo template deverá:

- utilizar a paleta e a tipografia oficiais;
- utilizar somente ativos aprovados da Biblioteca Oficial de Componentes Visuais;
- possuir uma única mensagem principal;
- manter a logo legível e sem alterações;
- tratar o Laranja Destaque apenas como detalhe;
- prever corte e redução para telas pequenas;
- manter títulos como texto editável durante a produção;
- respeitar margens de segurança;
- evitar elementos essenciais próximos às bordas;
- ser exportado no formato, tamanho e qualidade adequados ao canal.

### 28.2 Template para capa de artigo

**Finalidade:** identificar visualmente o tema de um artigo e criar reconhecimento entre os conteúdos do blog.

**Proporção:** 16:9. Tamanho de produção recomendado: 1600 × 900 px.

**Composição:**

- título curto como elemento principal;
- ilustração temática ou personagem como elemento de apoio;
- fundo claro com formas discretas;
- identificação visual da marca;
- categoria opcional, com destaque menor que o título.

**Posição dos elementos:**

- título preferencialmente no terço esquerdo ou central;
- ilustração ou personagem preferencialmente no terço oposto ao título;
- logo em um dos cantos, sempre dentro da área segura;
- elementos matemáticos no fundo, sem competir com o conteúdo principal.

**Boas práticas:**

- limitar o título a 12 palavras e, preferencialmente, a duas ou três linhas;
- deixar pelo menos 8% da largura e 8% da altura como margem interna;
- verificar leitura em largura aproximada de 320 px;
- usar ilustração diretamente relacionada ao tema do artigo.

**Restrições:**

- não reproduzir o subtítulo ou o resumo completo do artigo;
- não utilizar mais de uma ilustração principal;
- não usar a personagem em tamanho que concorra com o título;
- não inserir informações essenciais nas extremidades.

### 28.3 Template Open Graph

**Finalidade:** representar páginas e artigos em compartilhamentos sociais, aplicativos de mensagens e mecanismos que leem metadados Open Graph.

**Proporção:** 1200 × 630 px, aproximadamente 1,91:1.

**Composição:**

- título curto e legível;
- logo oficial;
- fundo da paleta oficial;
- ilustração, personagem ou elemento temático;
- categoria opcional.

**Posição dos elementos:**

- manter texto e logo dentro de uma área segura mínima de 72 px em todos os lados;
- posicionar título e ilustração em áreas opostas;
- posicionar a logo em canto estável e livre de interferências;
- manter o ponto focal próximo ao centro visual para resistir a cortes.

**Boas práticas:**

- utilizar título com até 10 palavras e no máximo três linhas;
- produzir contraste forte entre título e fundo;
- testar a imagem em miniatura;
- utilizar poucos elementos e formas grandes.

**Restrições:**

- não colocar texto pequeno, URL, parágrafo ou lista;
- não depender de transparência;
- não posicionar rostos, logo ou título junto às bordas;
- não repetir visualmente toda a interface da página.

### 28.4 Template para miniaturas do blog

**Finalidade:** facilitar a identificação e a comparação de conteúdos em cards, listagens, categorias e recomendações.

**Proporção:** 4:3. Tamanho de produção recomendado: 1200 × 900 px.

**Composição:**

- assunto visual único;
- título reduzido ou palavra-chave somente quando necessário;
- cor ou pequeno identificador de categoria;
- assinatura visual discreta.

**Posição dos elementos:**

- assunto principal centralizado ou distribuído entre os terços;
- texto dentro da área central segura;
- categoria e logo sempre subordinadas ao assunto.

**Boas práticas:**

- priorizar reconhecimento sem depender da leitura do texto;
- manter consistência entre miniaturas da mesma categoria;
- testar dentro do Card de Artigo definido na Parte 2;
- preservar boa leitura em telas pequenas.

**Restrições:**

- usar no máximo seis palavras quando houver texto;
- não transformar a miniatura em uma versão reduzida da capa completa;
- não utilizar detalhes finos ou muitos ícones;
- não alterar a proporção para preencher o card.

### 28.5 Template para Recursos Gratuitos

**Finalidade:** apresentar materiais gratuitos, guias, atividades, checklists e arquivos para download.

**Proporção:** principal em 4:3, com tamanho recomendado de 1200 × 900 px. Quando necessária uma representação do material, sua capa poderá aparecer em proporção vertical dentro desse quadro.

**Composição:**

- nome curto do recurso;
- tipo do material;
- representação simples do material;
- ilustração temática opcional;
- identificação da marca.

**Posição dos elementos:**

- título na metade superior;
- representação do material na região central ou lateral;
- tipo do arquivo próximo ao título, com menor destaque;
- logo em canto livre e dentro da área segura.

**Boas práticas:**

- deixar evidente o que será recebido;
- diferenciar visualmente tipos de recurso sem criar novas cores de marca;
- manter aparência útil, organizada e acessível;
- combinar a arte com o CTA “Baixar Material” definido na Parte 2.

**Restrições:**

- não simular funcionalidades que o arquivo não possui;
- não usar selos promocionais exagerados;
- não inserir instruções longas na imagem;
- não confundir recurso gratuito com anúncio de produto.

### 28.6 Template para CTAs

**Finalidade:** apoiar uma única ação dentro de artigos, páginas, recursos e campanhas.

**Proporção:** horizontal flexível, com referência de 3:1 para banners e adaptação vertical para mobile. Tamanho de produção recomendado para imagem independente: 1200 × 400 px.

**Composição:**

- benefício principal;
- chamada curta;
- área visual destinada ao botão quando o CTA for implementado na interface;
- personagem ou ilustração opcional;
- fundo simples.

**Posição dos elementos:**

- texto no primeiro terço ou na metade de maior leitura;
- personagem ou ilustração no lado oposto;
- área de ação livre de elementos decorativos;
- logo opcional e subordinada.

**Boas práticas:**

- manter apenas uma ação;
- usar verbo de ação;
- separar texto e botão real no HTML sempre que o CTA fizer parte de uma página;
- prever empilhamento dos elementos no mobile.

**Restrições:**

- não desenhar um botão dentro da imagem quando ele precisar ser clicável;
- não utilizar mais de um CTA concorrente;
- não inserir parágrafos;
- não depender exclusivamente da personagem para comunicar o benefício.

### 28.7 Template para banners institucionais

**Finalidade:** apresentar temas institucionais, páginas de campanha, avisos e seções de abertura.

**Proporção:** horizontal 3:1. Tamanho de produção recomendado: 1800 × 600 px. Deve possuir versão ou composição adaptável para 4:5 no mobile quando o corte horizontal comprometer a mensagem.

**Composição:**

- mensagem institucional;
- ilustração ou personagem opcional;
- logo;
- formas de apoio discretas.

**Posição dos elementos:**

- mensagem na área de maior contraste;
- elemento visual no terço oposto;
- logo com área de respiro;
- centro protegido para cortes responsivos.

**Boas práticas:**

- usar títulos curtos;
- produzir uma composição que continue compreensível com cortes laterais;
- equilibrar espaço vazio e conteúdo;
- validar a convivência com header e demais componentes da página.

**Restrições:**

- não usar como mural de informações;
- não aplicar fundo escuro sem justificativa e aprovação;
- não misturar campanha, navegação e múltiplas chamadas;
- não substituir conteúdo textual importante por texto incorporado à imagem.

### 28.8 Template para redes sociais

**Finalidade:** divulgar conteúdos, recursos, orientações e comunicações da marca nos canais sociais.

**Proporções oficiais:**

- feed vertical: 1080 × 1350 px, proporção 4:5;
- feed quadrado: 1080 × 1080 px, proporção 1:1;
- stories e reels: 1080 × 1920 px, proporção 9:16.

**Composição:**

- uma mensagem principal;
- título curto;
- ilustração, personagem ou elemento temático;
- logo;
- chamada opcional e curta.

**Posição dos elementos:**

- manter título na metade superior ou na área central de leitura;
- manter logo dentro da área segura;
- em stories e reels, evitar informações essenciais nos 250 px superiores e nos 350 px inferiores;
- reservar bordas livres para interfaces das plataformas.

**Boas práticas:**

- criar a composição para cada proporção, em vez de apenas redimensionar;
- usar séries visuais consistentes;
- manter legenda e detalhes fora da arte sempre que possível;
- verificar contraste, leitura e reconhecimento em tela de celular.

**Restrições:**

- não publicar a mesma composição com cortes automáticos que removam conteúdo;
- não usar hashtags, URLs longas ou parágrafos dentro da imagem;
- não imitar a interface de uma plataforma;
- não incluir elementos de tendência que descaracterizem a marca.

## 29. Biblioteca Oficial de Componentes Visuais

A Biblioteca Oficial de Componentes Visuais é o conjunto controlado de ativos aprovados para a produção de imagens da Escola de Pais Online.

Todos os templates e todas as artes deverão utilizar essa biblioteca. Um elemento externo, experimental ou gerado por IA não passa a fazer parte da biblioteca apenas por ter sido utilizado em uma peça. Sua inclusão exige revisão, aprovação e registro.

### 29.1 Conteúdo da biblioteca

A biblioteca deverá reunir e organizar:

- logos oficiais;
- personagem oficial;
- ícones;
- formas geométricas;
- fundos;
- elementos matemáticos;
- elementos infantis discretos;
- ilustrações auxiliares;
- blocos gráficos.

### 29.2 Regras por grupo

**Logos oficiais**

- utilizar somente arquivos mestres aprovados;
- preservar proporção, cores e integridade;
- manter versões horizontal e quadrada conforme o espaço disponível;
- nunca redesenhar, distorcer, inclinar, recortar ou aplicar efeitos.

**Personagem oficial**

- utilizar somente versões, poses, expressões e enquadramentos aprovados;
- preservar traços, cores, proporções e personalidade;
- seguir integralmente as regras da seção 30.

**Ícones**

- manter estilo simples, outline ou sólido discreto;
- utilizar espessura visual consistente em uma mesma composição;
- empregar ícones para apoiar compreensão, não apenas para decorar.

**Formas geométricas e blocos gráficos**

- utilizar círculos, arcos, retângulos arredondados, linhas e blocos simples;
- aplicar apenas cores oficiais;
- manter baixa complexidade e função clara na hierarquia.

**Fundos**

- priorizar fundos claros, limpos e com contraste adequado;
- permitir padrões discretos derivados da biblioteca;
- evitar texturas pesadas, ruído visual e gradientes não aprovados.

**Elementos matemáticos**

- utilizar números, sinais, formas, agrupamentos, materiais de contagem e representações coerentes com o conteúdo;
- revisar toda expressão, conta ou símbolo antes da aprovação;
- evitar fórmulas aleatórias usadas apenas como decoração.

**Elementos infantis discretos**

- utilizar apenas quando contribuírem para acolhimento ou contexto;
- manter aparência compatível com crianças de 6 a 9 anos sem infantilizar a comunicação dirigida aos pais;
- evitar personagens, brinquedos ou enfeites em excesso.

**Ilustrações auxiliares**

- seguir o estilo oficial da seção 32;
- representar ações, objetos e contextos que apoiem a mensagem;
- manter coerência de traço, perspectiva, acabamento e paleta.

### 29.3 Governança

Cada ativo deverá possuir:

- nome claro;
- versão aprovada;
- formato adequado ao uso;
- fundo transparente quando aplicável;
- origem e licença conhecidas;
- responsável ou registro de aprovação;
- indicação de usos permitidos, quando necessária.

Ativos obsoletos não devem permanecer misturados aos ativos aprovados. Qualquer atualização da logo, da personagem ou de outro componente central exige atualização deste manual antes de ser tratada como padrão.

## 29.X Estrutura Oficial do Design System

Esta seção define onde os componentes do Design System deverão existir fisicamente, tanto no Canva quanto no repositório do projeto.

Essa organização é obrigatória para qualquer pessoa, designer, desenvolvedor, IA ou ferramenta responsável pela produção visual da Escola de Pais Online. Ela deverá ser respeitada na criação, edição, exportação, armazenamento e reutilização dos materiais.

O Canva será o ambiente oficial para organização das fontes editáveis, dos componentes mestres e dos templates visuais. O repositório será o ambiente oficial para os arquivos exportados, aprovados e utilizados pelo projeto.

A inclusão desta estrutura no manual não significa que todas as pastas ou todos os ativos já tenham sido criados. A implementação física deverá seguir exatamente a organização documentada abaixo.

### 29.X.1 Biblioteca Oficial no Canva

A Biblioteca Oficial no Canva deverá utilizar a seguinte estrutura:

```text
Escola de Pais Online
└── Design System
    ├── Templates
    ├── Componentes
    ├── Logos
    ├── Personagem
    ├── Ícones
    ├── Fundos
    ├── Elementos Matemáticos
    ├── Recursos Gratuitos
    ├── Redes Sociais
    └── Open Graph
```

#### Templates

Finalidade:

- armazenar os templates oficiais e editáveis definidos na seção 28;
- concentrar as estruturas de composição, áreas seguras, grids, hierarquia e posicionamento;
- servir como ponto de partida para novas produções.

Deverá conter:

- template para capa de artigo;
- template Open Graph;
- template para miniaturas do blog;
- template para Recursos Gratuitos;
- template para CTAs;
- template para banners institucionais;
- template para redes sociais;
- variações oficiais de proporção ou canal.

Não deverão ser armazenadas nessa pasta cópias preenchidas de campanhas ou publicações específicas. As versões oficiais deverão permanecer identificadas como mestres.

#### Componentes

Finalidade:

- reunir os componentes reutilizáveis que formam as composições;
- facilitar o uso consistente dos mesmos blocos em diferentes templates;
- impedir a recriação de elementos já aprovados.

Deverá conter:

- blocos gráficos;
- áreas de título;
- etiquetas de categoria;
- molduras;
- padrões de CTA;
- assinaturas visuais;
- formas compostas;
- agrupamentos reutilizáveis aprovados.

#### Logos

Finalidade:

- armazenar todas as versões oficiais da logo;
- garantir que cada aplicação utilize um arquivo mestre aprovado.

Deverá conter:

- logo horizontal;
- logo quadrada;
- versões de cor oficialmente aprovadas;
- versões com transparência quando aplicável;
- arquivos em formatos adequados para edição e exportação.

Não deverá conter logos redesenhadas, distorcidas, experimentais ou modificadas para peças específicas.

#### Personagem

Finalidade:

- centralizar a personagem oficial;
- organizar suas poses, expressões, enquadramentos e variações aprovadas;
- garantir o cumprimento das regras da seção 30.

Deverá conter:

- arquivo mestre da personagem;
- poses aprovadas;
- expressões aprovadas;
- recortes oficiais;
- versões com fundo transparente;
- orientações visuais de área de respiro e enquadramento quando necessárias.

#### Ícones

Finalidade:

- manter um conjunto consistente de ícones;
- evitar a mistura de famílias, espessuras e estilos.

Deverá conter:

- ícones outline aprovados;
- ícones sólidos discretos aprovados;
- versões de cor previstas na paleta;
- símbolos utilizados nos templates e materiais.

Não deverá conter ícones externos sem origem, licença e aprovação conhecidas.

#### Fundos

Finalidade:

- armazenar fundos e padrões compatíveis com a identidade;
- oferecer bases visuais reutilizáveis para as diferentes proporções.

Deverá conter:

- fundos lisos da paleta oficial;
- padrões discretos;
- composições leves de formas;
- texturas aprovadas, quando existirem;
- variações oficiais para formatos horizontal, quadrado e vertical.

#### Elementos Matemáticos

Finalidade:

- reunir representações educacionais e matemáticas corretas;
- apoiar as artes sem recorrer a símbolos aleatórios ou inconsistentes.

Deverá conter:

- números e sinais;
- formas geométricas;
- materiais de contagem;
- agrupamentos;
- representações visuais de operações;
- elementos pedagógicos aprovados.

Toda conta, expressão ou representação deverá estar matematicamente correta antes de ser adicionada à biblioteca.

#### Recursos Gratuitos

Finalidade:

- organizar as fontes editáveis das capas e peças específicas dos materiais gratuitos;
- manter consistência entre guias, atividades, checklists e arquivos para download.

Deverá conter:

- capas editáveis dos recursos;
- variações aprovadas por tipo de material;
- composições prontas derivadas do template oficial;
- peças de divulgação vinculadas aos recursos.

Os componentes utilizados nessas peças deverão permanecer vinculados ou derivados dos Componentes Mestres, sem cópias independentes tratadas como novas origens.

#### Redes Sociais

Finalidade:

- organizar as fontes editáveis das publicações sociais;
- separar as produções por formato, canal, série ou campanha;
- garantir adaptação correta entre as proporções oficiais.

Deverá conter:

- peças em 4:5;
- peças em 1:1;
- peças em 9:16;
- séries editoriais aprovadas;
- versões editáveis das publicações.

Os materiais deverão ser recompostos para cada proporção. Uma versão recortada automaticamente não deverá ser tratada como template ou componente mestre.

#### Open Graph

Finalidade:

- organizar as fontes editáveis das imagens de compartilhamento;
- manter o padrão oficial de 1200 × 630 px;
- facilitar a produção consistente para artigos e páginas.

Deverá conter:

- imagens Open Graph editáveis;
- variações aprovadas por categoria ou tipo de página;
- composições derivadas do Template Open Graph;
- versões em produção e versões aprovadas claramente identificadas.

### 29.X.2 Regras de organização no Canva

- todos os templates oficiais deverão permanecer dentro de `Escola de Pais Online > Design System`;
- os componentes reutilizáveis nunca deverão ser duplicados desnecessariamente;
- alterações em componentes oficiais deverão ser feitas sempre no Componente Mestre;
- cópias usadas em peças específicas não poderão ser tratadas como nova fonte oficial;
- nomes deverão indicar claramente tipo, finalidade, estado e versão quando aplicável;
- rascunhos e experimentos deverão permanecer separados dos componentes aprovados;
- somente pessoas autorizadas poderão modificar os Componentes Mestres;
- a versão aprovada deverá ser facilmente distinguida das versões em produção ou revisão;
- componentes obsoletos deverão ser arquivados e não poderão permanecer disponíveis como opção oficial.

### 29.X.3 Estrutura Oficial no Projeto

Os arquivos exportados, aprovados e destinados ao site ou a outros canais deverão ser versionados no repositório conforme a seguinte estrutura:

```text
assets/
└── images/
    ├── brand/
    │   ├── logos/
    │   ├── personagem/
    │   ├── icones/
    │   └── elementos/
    ├── blog/
    │   ├── artigos/
    │   ├── thumbnails/
    │   └── og/
    ├── recursos/
    ├── banners/
    └── social/
```

Essa é a estrutura oficial recomendada para a organização futura dos arquivos. Sua adoção física deverá preservar referências existentes e ser executada de forma controlada, sem mover ou renomear arquivos já utilizados pelo projeto sem a correspondente atualização e validação dos caminhos.

#### `assets/images/brand/`

Finalidade:

- concentrar os ativos centrais da identidade visual exportados para uso no projeto;
- separar elementos permanentes da marca das imagens específicas de conteúdo.

Subpastas:

- `logos/`: versões oficiais e otimizadas das logos utilizadas pelo site;
- `personagem/`: versões aprovadas e exportadas da personagem;
- `icones/`: ícones visuais da marca destinados a imagens e composições;
- `elementos/`: formas, fundos, elementos matemáticos, blocos gráficos e ilustrações auxiliares reutilizáveis.

Ícones técnicos de interface, favicons e ícones de aplicativo poderão permanecer nas estruturas técnicas já definidas pelo projeto quando não forem componentes da biblioteca de imagens.

#### `assets/images/blog/`

Finalidade:

- armazenar as imagens publicadas no blog;
- separar capas, miniaturas e arquivos Open Graph;
- permitir localização por slug e tipo de uso.

Subpastas:

- `artigos/`: capas e imagens editoriais específicas dos artigos;
- `thumbnails/`: miniaturas utilizadas em cards, listagens, categorias e recomendações;
- `og/`: imagens de compartilhamento Open Graph em 1200 × 630 px.

Os nomes deverão seguir a Convenção de Arquivos da seção 35.

#### `assets/images/recursos/`

Finalidade:

- armazenar capas, prévias e imagens dos Recursos Gratuitos;
- organizar arquivos por recurso ou slug;
- separar materiais publicados dos arquivos-fontes mantidos no Canva.

Deverá conter somente exportações aprovadas e otimizadas para o canal de uso.

#### `assets/images/banners/`

Finalidade:

- armazenar banners institucionais, promocionais e de campanha utilizados pelo projeto;
- organizar versões por tema, proporção e contexto;
- manter separadas as adaptações para desktop e mobile quando necessárias.

#### `assets/images/social/`

Finalidade:

- armazenar as exportações finais para redes sociais quando esses arquivos precisarem ser preservados ou versionados no projeto;
- organizar peças por canal, campanha, série ou data editorial quando aplicável;
- manter separadas as proporções 4:5, 1:1 e 9:16.

Arquivos temporários, rascunhos e exportações rejeitadas não deverão ser versionados nessa pasta.

### 29.X.4 Regras de armazenamento no projeto

- o repositório deverá receber somente arquivos finais, aprovados e necessários ao projeto;
- arquivos editáveis deverão permanecer no Canva, salvo quando houver formato-fonte que precise ser preservado no repositório por decisão específica;
- cada exportação deverá seguir a nomenclatura da seção 35;
- não deverão existir cópias idênticas do mesmo ativo em pastas diferentes;
- variações legítimas de dimensão, proporção ou formato deverão possuir nomes que deixem sua finalidade explícita;
- arquivos não utilizados, temporários ou rejeitados não deverão ser incluídos no commit;
- nenhuma reorganização poderá quebrar URLs, metadados, páginas ou referências existentes;
- otimizações de formato ou peso deverão preservar qualidade, proporção e identidade.

### 29.X.5 Componentes Mestres

Componentes Mestres são as origens oficiais, editáveis, aprovadas e controladas dos elementos reutilizáveis do Design System.

Deverão existir apenas uma vez como origem oficial:

- logos oficiais;
- personagem;
- ícones;
- fundos;
- elementos matemáticos;
- blocos gráficos;
- templates oficiais.

Todos os demais materiais deverão utilizar, referenciar ou derivar desses componentes. Não deverão ser criadas cópias independentes para funcionar como novas origens.

Uma duplicação necessária para compor uma arte não transforma a cópia em Componente Mestre. A origem oficial continuará sendo o componente armazenado na área correspondente do Design System.

Quando um Componente Mestre for atualizado:

- a atualização deverá ser aprovada e versionada;
- a versão anterior deverá ser arquivada ou identificada como obsoleta;
- todas as novas produções deverão utilizar a versão mais recente aprovada;
- templates e novas peças deverão referenciar a origem atualizada;
- materiais já publicados somente deverão ser substituídos quando houver necessidade técnica, correção obrigatória ou decisão expressa do responsável pelo projeto;
- nenhuma versão em rascunho deverá substituir automaticamente uma versão aprovada.

### 29.X.6 Governança da estrutura

- nenhum componente oficial poderá ser substituído sem atualização prévia do Manual de Design;
- novos componentes deverão ser adicionados primeiro à Biblioteca Oficial de Componentes Visuais;
- todo novo componente deverá possuir finalidade, origem, licença, versão e aprovação conhecidas;
- componentes experimentais não poderão ser utilizados em materiais publicados sem aprovação;
- experimentos deverão permanecer claramente identificados e separados da biblioteca aprovada;
- a biblioteca deverá permanecer organizada, versionada e consistente ao longo do crescimento do projeto;
- alterações estruturais deverão preservar a relação entre fontes editáveis, Componentes Mestres e exportações;
- permissões de edição deverão proteger os Componentes Mestres contra alterações acidentais;
- revisões periódicas deverão identificar duplicatas, ativos obsoletos, arquivos sem origem e inconsistências;
- sempre que uma nova pose da personagem for criada e aprovada, ela deverá ser incorporada à Biblioteca Oficial da Personagem antes de ser utilizada em novos materiais;
- qualquer exceção aprovada que se torne recorrente deverá ser incorporada ao manual antes de ser tratada como novo padrão.

## 30. Uso Oficial da Personagem

A personagem oficial humaniza a marca e transmite proximidade, confiança, simpatia e conhecimento.

A personagem complementa a identidade visual, mas nunca substitui a logo.

### 30.1 Quando utilizar

Utilizar a personagem:

- em capas e banners nos quais a presença humana favoreça acolhimento;
- em artigos que apresentem orientação, explicação ou incentivo;
- em Recursos Gratuitos;
- em CTAs que convidem o responsável para a próxima ação;
- em materiais ricos, campanhas e redes sociais;
- para conduzir o olhar ou reforçar uma mensagem curta;
- quando sua presença tornar o conteúdo mais próximo sem reduzir a clareza.

### 30.2 Quando evitar

Evitar a personagem:

- em toda peça de uma sequência, quando a repetição causar saturação;
- em imagens muito pequenas nas quais seus traços não sejam reconhecíveis;
- em comunicações legais, técnicas ou de alerta nas quais sua presença pareça inadequada;
- quando a ilustração temática explicar melhor o conteúdo;
- quando não houver espaço para o respiro mínimo;
- como elemento puramente decorativo;
- em posição que concorra com título, CTA ou informação essencial.

### 30.3 Tamanhos

O tamanho é medido pela altura visível da personagem em relação à altura total da arte.

- mínimo recomendado: 18% da altura da arte;
- faixa preferencial: de 25% a 45%;
- máximo recomendado: 55%;
- em aparições parciais intencionais, o rosto deverá continuar reconhecível e ter dimensão suficiente para leitura no tamanho final.

Em miniaturas, favicons, avatares ou áreas menores que 96 px, não utilizar a personagem completa. Utilizar a logo ou um recorte oficial especificamente aprovado para essa finalidade.

Os limites poderão ser ultrapassados somente quando a personagem for o assunto principal da campanha e a composição tiver sido aprovada.

### 30.4 Enquadramentos permitidos

São permitidos:

- corpo inteiro;
- plano de três quartos;
- enquadramento da cintura para cima;
- busto;
- recortes laterais previstos na composição, desde que não pareçam acidentais.

Não cortar:

- olhos, boca ou elementos essenciais da expressão;
- articulações exatamente na linha de corte;
- partes que comprometam a leitura da pose;
- contornos de forma apertada ou irregular.

Não espelhar a personagem quando isso inverter detalhes, gestos, textos ou características do desenho. Não alterar expressão, pose ou direção do olhar por edição improvisada.

### 30.5 Área de respiro

Manter ao redor da personagem uma área livre mínima equivalente a 10% de sua altura visível.

Essa área:

- não deve conter título, logo ou CTA;
- pode receber apenas formas de fundo discretas;
- deve preservar contorno e expressão;
- deve aumentar quando a pose ou o gesto apontar para uma mensagem.

### 30.6 Posicionamentos recomendados

Preferir:

- personagem em um terço lateral e título no terço oposto;
- personagem direcionando olhar ou gesto para a mensagem;
- personagem apoiada visualmente por uma forma simples;
- personagem alinhada à base quando aparecer de corpo inteiro;
- personagem centralizada somente quando for o assunto principal.

### 30.7 Limitações

É proibido:

- alterar cores, traços, proporções ou roupas sem aprovação;
- aplicar filtros, contornos, sombras pesadas ou efeitos 3D;
- deformar, esticar, comprimir ou inclinar;
- combinar partes de versões diferentes;
- criar poses ou expressões não aprovadas e tratá-las como oficiais;
- colocar objetos sobre o rosto;
- usar a personagem como letra, ícone de interface ou substituta da logo;
- representar medo, constrangimento, agressividade ou ridicularização;
- utilizar a personagem em contexto incompatível com os valores da marca.

## 31. Composição das Artes

As regras desta seção se aplicam a qualquer arte produzida futuramente, independentemente de canal ou formato.

### 31.1 Hierarquia visual

Toda arte deverá possuir, nesta ordem:

1. mensagem ou assunto principal;
2. elemento visual de apoio;
3. identificação da marca;
4. informações secundárias estritamente necessárias.

Um único elemento deve dominar a composição. Título, personagem, ilustração e logo não devem competir pelo mesmo nível de atenção.

### 31.2 Títulos

Os títulos devem:

- ocupar área de alto contraste;
- ser lidos antes dos elementos secundários;
- utilizar a tipografia oficial;
- utilizar preferencialmente Azul Escuro, Verde Principal ou branco sobre fundo aprovado com contraste suficiente;
- ter até 12 palavras nas capas e até 10 palavras em Open Graph;
- ocupar preferencialmente duas linhas e nunca mais de três;
- manter palavras inteiras e quebras de linha naturais;
- evitar caixa alta em frases completas;
- evitar pontuação e destaques em excesso.

### 31.3 Quantidade máxima de texto

Uma arte deve conter:

- um título;
- uma identificação curta de categoria, tipo ou série, quando necessária;
- uma chamada de ação curta, quando aplicável;
- a identificação da marca.

Não inserir parágrafos, listas longas, explicações completas ou texto que deveria estar na página, legenda ou descrição.

Como referência, o conjunto de textos da arte não deve ultrapassar 20 palavras, exceto em peças informativas especificamente aprovadas.

### 31.4 Áreas de respiro

- manter margem interna mínima de 8% em capas, miniaturas e peças sociais;
- respeitar as áreas seguras específicas de cada template;
- preservar espaço entre título, logo, personagem e ilustração;
- não preencher vazios apenas por decoração;
- considerar o espaço em branco como parte ativa da identidade.

### 31.5 Alinhamentos

- utilizar preferencialmente alinhamento à esquerda para blocos de texto;
- centralizar apenas mensagens curtas e composições simples;
- alinhar elementos a um grid comum;
- evitar texto justificado;
- evitar múltiplos eixos de alinhamento na mesma arte;
- manter bordas, bases e centros visualmente coerentes.

### 31.6 Contraste

- garantir contraste suficiente entre texto, logo, ícones e fundo;
- aplicar os critérios de acessibilidade definidos na Parte 2;
- não depender somente de cor para diferenciar informações;
- evitar texto sobre áreas detalhadas;
- quando necessário, utilizar bloco sólido ou área limpa da paleta oficial atrás do texto;
- revisar contraste no tamanho real de publicação e sob brilho reduzido da tela.

### 31.7 Distribuição dos elementos

- trabalhar com um ponto focal principal;
- equilibrar peso visual entre texto e ilustração;
- utilizar no máximo uma ilustração principal, uma personagem e poucos elementos auxiliares;
- manter elementos decorativos em escala e contraste inferiores;
- evitar concentração excessiva em um único canto;
- prever cortes sem perder título, logo, rosto ou informação;
- adaptar a distribuição para cada proporção, sem apenas esticar ou recortar a arte original.

## 32. Estilo das Ilustrações

O estilo oficial das ilustrações da Escola de Pais Online é:

- vetorial;
- moderno;
- limpo;
- minimalista;
- acolhedor;
- profissional;
- claro em tamanhos reduzidos;
- coerente com a personagem e com a paleta oficial.

### 32.1 Características formais

As ilustrações devem:

- utilizar formas simples e reconhecíveis;
- possuir poucos níveis de detalhe;
- manter contornos e pesos visuais consistentes;
- utilizar composição frontal ou perspectiva simples;
- ter expressões naturais e positivas quando houver pessoas;
- representar diversidade com respeito, naturalidade e sem estereótipos;
- utilizar cores oficiais como base;
- permitir adaptação e recorte sem perder o sentido;
- apoiar o conteúdo pedagógico sem parecer material escolar tradicional.

### 32.2 Restrições de estilo

As ilustrações não devem:

- possuir aparência infantil exagerada;
- parecer desenho para bebês;
- apresentar excesso de detalhes;
- utilizar efeitos 3D;
- utilizar sombras pesadas;
- utilizar realismo fotográfico;
- utilizar brilhos, volumes plásticos ou texturas complexas;
- misturar estilos de traço na mesma peça;
- imitar marcas, personagens ou estilos protegidos de terceiros;
- incluir letras, números ou operações incorretas;
- gerar cenas visualmente confusas ou emocionalmente negativas.

### 32.3 Sombras e profundidade

Quando necessárias, sombras devem ser:

- leves;
- difusas;
- pouco contrastadas;
- usadas apenas para separar planos.

A profundidade deve vir principalmente da sobreposição, da escala e do espaçamento, nunca de efeitos pesados.

## 33. Prompt Mestre para Produção de Imagens

O Prompt Mestre é a base obrigatória para solicitações feitas a ferramentas de inteligência artificial. Ele não substitui o briefing, o template ou a revisão humana.

Antes de utilizar o prompt, preencher todos os campos entre colchetes. Quando a ferramenta não possuir acesso aos documentos ou aos ativos oficiais, fornecer como referência a logo, a personagem, o template e os componentes necessários. A IA nunca deverá recriar esses ativos com base apenas em descrição.

### 33.1 Prompt Mestre oficial

> Crie uma imagem oficial para a Escola de Pais Online.
>
> **Objetivo da peça:** [objetivo].
>
> **Canal e template obrigatório:** [nome do template da seção 28].
>
> **Dimensões e proporção:** [dimensões].
>
> **Público e contexto:** pais e responsáveis por crianças de 6 a 9 anos, com prioridade para visualização em celular.
>
> **Tema e mensagem principal:** [tema e mensagem].
>
> **Título exato, se houver:** [título curto].
>
> **Elemento visual principal:** [personagem oficial fornecida / ilustração temática / recurso / outro ativo aprovado].
>
> **Ativos oficiais fornecidos:** [listar arquivos da Biblioteca Oficial de Componentes Visuais].
>
> Siga integralmente o Design System da Escola de Pais Online, incluindo os princípios, a identidade visual e as restrições das Partes 1, 2 e 3 do Manual de Design e Interface.
>
> A imagem deve transmitir acolhimento, confiança, simplicidade, proximidade, aprendizado e organização. Deve parecer parte da mesma família visual das demais peças da marca, funcionar em desktop e mobile, reforçar o reconhecimento da marca e priorizar clareza.
>
> Utilize exclusivamente a paleta oficial: Verde Principal #178F3E, Verde Hover #117333, Verde Claro #EEF9F1, Azul Institucional #174F78, Azul Escuro #082B4B, Laranja Destaque #F7AE24 somente em pequenos destaques, Texto Principal #222A26, Texto Secundário #59645F, Fundo Principal #FFFFFF, Fundo Alternativo #F8FAF9 e Bordas #DFE5E1.
>
> Utilize a tipografia oficial do sistema: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif. Se a ferramenta não puder aplicar fielmente essa tipografia ou reproduzir texto sem erros, gere a composição com área reservada e adicione o texto posteriormente em uma ferramenta de layout.
>
> Respeite exatamente o template escolhido, sua hierarquia, áreas seguras, limites de texto, posição dos elementos, boas práticas e restrições. Mantenha um único ponto focal, bastante espaço em branco, título legível, alinhamentos simples, alto contraste e poucos elementos.
>
> Utilize somente logos, personagem, ícones, fundos, formas, elementos matemáticos, elementos infantis discretos, ilustrações auxiliares e blocos gráficos pertencentes à biblioteca oficial e fornecidos como referência. Não redesenhe nem modifique a logo. Não recrie nem altere a personagem. A personagem complementa a identidade, mas nunca substitui a logo.
>
> O estilo da ilustração deve ser vetorial, moderno, limpo, minimalista, acolhedor e profissional. Use formas simples, poucos detalhes e cores oficiais. Não use aparência infantil exagerada, banco de imagens genérico, ambiente corporativo, sala de aula tradicional, efeitos 3D, sombras pesadas, brilhos, texturas complexas, excesso de elementos ou estilos de terceiros.
>
> Preserve a exatidão de letras, números, sinais e operações matemáticas. Não invente texto, logo, símbolos ou componentes. Não inclua informações que não estejam no briefing.
>
> **Composição específica:** [descrever posição do título, logo, personagem ou ilustração e demais elementos].
>
> **Itens obrigatórios:** [listar].
>
> **Itens proibidos ou que devem ser evitados nesta peça:** [listar].
>
> Entregue a composição nas dimensões solicitadas, com qualidade adequada ao canal, sem marcas d’água, sem mockup e sem elementos fora da área de corte. Antes de finalizar, verifique consistência visual, legibilidade, contraste, proporção, responsividade, uso correto da logo e da personagem e fidelidade ao Design System.

### 33.2 Complementos obrigatórios ao prompt

Cada solicitação deverá anexar ou informar:

- template escolhido;
- dimensão exata;
- título final revisado;
- objetivo e canal;
- ativos oficiais necessários;
- referência da personagem, quando utilizada;
- posição esperada dos elementos;
- restrições específicas da peça;
- formato de entrega.

Uma saída de IA é sempre um rascunho até passar pelo fluxo e pelo checklist oficiais.

## 34. Fluxo Oficial de Produção

Toda imagem deverá seguir este fluxo:

### 34.1 Criação do conteúdo

- definir objetivo, público, canal e ação esperada;
- finalizar e revisar título, categoria, chamada e demais textos;
- identificar a informação que deve receber maior destaque;
- confirmar direitos, fontes e exatidão de dados.

### 34.2 Definição do template

- selecionar um dos templates da seção 28;
- confirmar proporção e dimensões exigidas pelo canal;
- definir adaptações necessárias para desktop e mobile;
- separar os ativos aprovados da biblioteca.

### 34.3 Produção da arte

- montar a composição conforme o template;
- aplicar paleta e tipografia oficiais;
- utilizar somente componentes visuais aprovados;
- manter textos editáveis;
- gerar variações somente quando houver finalidade clara;
- no uso de IA, partir do Prompt Mestre e fornecer os ativos de referência.

### 34.4 Revisão

- revisar texto, ortografia, números e operações;
- aplicar o Checklist de Revisão das Imagens da seção 36;
- testar a arte no tamanho final e em telas pequenas;
- conferir cortes, áreas seguras e contraste;
- comparar com materiais já aprovados.

### 34.5 Aprovação

- registrar a versão submetida;
- obter aprovação do responsável pelo projeto;
- solicitar correções quando qualquer item obrigatório falhar;
- considerar como oficial apenas a versão explicitamente aprovada.

### 34.6 Exportação

- exportar nas dimensões corretas;
- selecionar formato compatível com o canal;
- preservar transparência somente quando necessária;
- otimizar o peso sem perda visual perceptível;
- remover metadados desnecessários quando aplicável;
- conferir novamente o arquivo exportado, não apenas o arquivo de edição.

### 34.7 Armazenamento

- salvar o arquivo-fonte editável quando aplicável;
- salvar a versão final na pasta adequada do projeto;
- aplicar a convenção de arquivos da seção 35;
- evitar duplicatas e nomes como “final”, “final-2” ou “novo”;
- manter separados rascunhos, fontes editáveis e arquivos aprovados.

### 34.8 Commit

- incluir somente arquivos aprovados;
- conferir caminhos e referências utilizados pelo projeto;
- registrar no commit a finalidade da imagem;
- não misturar alterações visuais não relacionadas;
- atualizar a documentação quando houver novo padrão aprovado.

### 34.9 Publicação

- publicar no canal correto;
- conferir a imagem no contexto real;
- validar desktop e mobile;
- testar compartilhamento quando houver Open Graph;
- verificar se compressão ou corte da plataforma comprometeram a arte;
- corrigir e versionar novamente caso a publicação revele algum problema.

## 35. Convenção de Arquivos

Os nomes dos arquivos devem ser previsíveis, legíveis e adequados para URLs.

### 35.1 Padrão geral

Utilizar:

`[tipo]-[tema-ou-slug]-[formato-ou-canal]-[variante]-v[NN].[extensão]`

Regras:

- utilizar somente letras minúsculas, números e hífens;
- não utilizar espaços, acentos, cedilha, sublinhados ou caracteres especiais;
- utilizar palavras curtas e descritivas;
- manter o mesmo slug utilizado pelo conteúdo quando aplicável;
- utilizar versão com dois dígitos: `v01`, `v02`, `v03`;
- omitir campos que não se aplicam, sem criar hífens duplicados;
- não utilizar datas, salvo quando a data fizer parte do conteúdo ou da campanha;
- não utilizar “final”, “finalissimo”, “novo”, “copia” ou nomes pessoais;
- preservar o nome durante otimizações que não alterem o conteúdo visual;
- aumentar a versão quando houver alteração visual aprovada.

### 35.2 Prefixos oficiais

**Artigos**

`artigo-[slug]-capa-v[NN].[extensão]`

Exemplo:

`artigo-como-ensinar-adicao-capa-v01.webp`

**Open Graph**

`og-[slug]-1200x630-v[NN].[extensão]`

Exemplo:

`og-como-ensinar-adicao-1200x630-v01.jpg`

**Miniaturas**

`thumb-[slug]-4x3-v[NN].[extensão]`

Exemplo:

`thumb-como-ensinar-adicao-4x3-v01.webp`

**Banners**

`banner-[tema]-[canal-ou-proporcao]-v[NN].[extensão]`

Exemplo:

`banner-sobre-nos-desktop-3x1-v01.webp`

**Materiais gratuitos**

`recurso-[slug]-[tipo-ou-proporcao]-v[NN].[extensão]`

Exemplo:

`recurso-tabuada-pratica-capa-4x3-v01.webp`

**Redes sociais**

`social-[tema]-[canal]-[proporcao]-v[NN].[extensão]`

Exemplos:

`social-adicao-instagram-4x5-v01.jpg`

`social-adicao-stories-9x16-v01.jpg`

### 35.3 Arquivos editáveis

O arquivo editável deverá utilizar o mesmo nome-base do arquivo exportado e a extensão nativa da ferramenta.

Quando uma única fonte gerar múltiplas exportações, utilizar:

`fonte-[tema-ou-slug]-v[NN].[extensão]`

Nunca sobrescrever uma versão aprovada com uma versão ainda em revisão.

## 36. Checklist de Revisão das Imagens

Nenhuma imagem será considerada aprovada antes de atender a todos os itens aplicáveis.

### 36.1 Identidade visual

- [ ] A arte transmite acolhimento, confiança, simplicidade, proximidade, aprendizado e organização.
- [ ] A arte parece pertencer à mesma família visual dos materiais aprovados.
- [ ] Foram utilizadas somente as cores da paleta oficial.
- [ ] O Laranja Destaque foi usado apenas como pequeno destaque.
- [ ] A tipografia oficial foi respeitada.
- [ ] A composição evita aparência genérica, corporativa ou escolar tradicional.
- [ ] Todos os ativos pertencem à Biblioteca Oficial de Componentes Visuais.

### 36.2 Conteúdo e legibilidade

- [ ] O objetivo da arte é compreendido rapidamente.
- [ ] Existe uma única mensagem principal.
- [ ] O título respeita o limite do template.
- [ ] Não há parágrafos ou informações desnecessárias.
- [ ] Ortografia, acentuação, números, símbolos e operações foram revisados.
- [ ] O texto permanece legível no tamanho final e em celular.
- [ ] Nenhum texto importante depende de detalhes pequenos.

### 36.3 Contraste e composição

- [ ] Títulos, logo, ícones e demais textos possuem contraste suficiente.
- [ ] O ponto focal principal está claro.
- [ ] Os alinhamentos seguem um grid coerente.
- [ ] As áreas de respiro e margens de segurança foram respeitadas.
- [ ] Elementos decorativos não competem com a mensagem.
- [ ] Nenhuma informação essencial está próxima de uma área de corte.
- [ ] A composição continua equilibrada nas proporções previstas.

### 36.4 Proporções e responsividade

- [ ] Foi utilizado o template correto.
- [ ] O arquivo possui as dimensões e a proporção exigidas.
- [ ] A arte foi verificada em desktop e mobile.
- [ ] As versões de outras proporções foram recompostas, e não apenas esticadas.
- [ ] Cortes de plataforma não removem título, logo, rosto ou informação essencial.
- [ ] A miniatura continua reconhecível e clara em tamanho reduzido.

### 36.5 Uso da personagem

- [ ] A personagem é necessária e adequada ao contexto.
- [ ] Foi utilizada uma versão oficial e aprovada.
- [ ] Cores, traços, expressão e proporções foram preservados.
- [ ] Tamanho, enquadramento e área de respiro respeitam a seção 30.
- [ ] A personagem não compete com o título ou CTA.
- [ ] A personagem não substitui a logo.
- [ ] Não existem cortes, filtros, efeitos ou alterações proibidas.

### 36.6 Uso da logo

- [ ] Foi utilizado um arquivo oficial.
- [ ] A versão escolhida é adequada ao espaço.
- [ ] A proporção e as cores foram preservadas.
- [ ] A logo possui contraste e área de respiro.
- [ ] A logo não foi redesenhada, recortada, inclinada, deformada ou coberta.
- [ ] A logo permanece legível no tamanho final.

### 36.7 Ilustrações e imagens

- [ ] A ilustração segue o estilo vetorial, moderno, limpo, minimalista, acolhedor e profissional.
- [ ] Não há efeitos 3D, sombras pesadas, excesso de detalhes ou mistura de estilos.
- [ ] Pessoas e contextos foram representados com respeito e sem estereótipos.
- [ ] Não há erros típicos de geração por IA.
- [ ] Letras, números, sinais, mãos, rostos e objetos estão visualmente corretos.
- [ ] A origem, a licença e os direitos de uso dos elementos são conhecidos.
- [ ] Quando houver fotografia de pessoas, os direitos de imagem foram confirmados.

### 36.8 Exportação e qualidade

- [ ] O formato de arquivo é adequado ao canal.
- [ ] As dimensões exportadas correspondem às dimensões aprovadas.
- [ ] A imagem não está pixelada, borrada ou excessivamente comprimida.
- [ ] O modo de cor é adequado para publicação digital.
- [ ] Transparências foram preservadas somente quando necessárias.
- [ ] O peso do arquivo foi otimizado sem perda visual perceptível.
- [ ] O arquivo exportado foi aberto e conferido.
- [ ] Não existem marcas d’água, guias, áreas de edição ou elementos ocultos indevidos.

### 36.9 Arquivo e publicação

- [ ] O nome segue a convenção da seção 35.
- [ ] A versão está correta.
- [ ] O arquivo foi armazenado na pasta adequada.
- [ ] A fonte editável foi preservada quando aplicável.
- [ ] Apenas a versão aprovada será incluída no commit.
- [ ] Caminhos e referências no projeto foram testados.
- [ ] Open Graph foi testado em contexto de compartilhamento quando aplicável.
- [ ] A imagem publicada foi conferida no canal real.

### 36.10 Aprovação final

- [ ] A arte está consistente com as Partes 1, 2 e 3 deste manual.
- [ ] A arte está consistente com os demais materiais oficiais.
- [ ] Todas as restrições do template foram respeitadas.
- [ ] Todas as correções solicitadas foram aplicadas.
- [ ] A aprovação do responsável pelo projeto foi registrada.

Somente após a conclusão deste checklist a imagem poderá receber o status **Aprovado** e seguir para commit e publicação.
