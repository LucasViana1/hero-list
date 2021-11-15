# Marvel Search Heros

Aplicação Web para a busca de personagens da Marvel.

## Requisitos mínimos

É necessário instalar o node ao menos na v12 e npm v6, [link para download](https://nodejs.org/en/).

Caso não possua o Git instalado, baixe [aqui](https://git-scm.com/downloads).

## Instalação do projeto

Clone o projeto:
```bash
git clone https://github.com/LucasViana1/hero-list.git
```

Acesse a pasta do projeto:
```bash
cd hero-list
```

Instale as dependências do projeto:
```bash
npm install
```

## Principais Dependências:
* React
* React DOM
* Styled Components
* Babel
* Webpack
* Jest

## Executar projeto
Primeiro copie o arquivo `.env.example` e renomeie a copia para `.env`, para sistemas linux o comando para isso costuma ser:
```bash
cp .env.example .env
```

Esse processo é importante para manter a integridade da chave pública e privada para acesso a API da Marvel.
Edite o arquivo `.env` e preencha as variáveis `PUBLIC_KEY` e `PRIVATE_KEY` com a chave pública e privada, respectivamente.

### Gerando chave privada e pública

Caso não possua as chaves para uso da API da Marvel, acesse o site [https://developer.marvel.com/](https://developer.marvel.com/) clique em "Get a key", será necessário criar uma conta para conseguir as chaves.

### Executando local
Para executar localmente a aplicação:
```bash
npm run dev
```
Será aberto uma aba no navegador na url [http://0.0.0.0:8080](http://0.0.0.0:8080)

## Comandos complementares
Para fazer o build do projeto, gerando os arquivos estáticos (serão salvos na pasta `dist`):
```bash
npm run build
```

Validar erros no padrão do código, a partir das regras definidas no Eslint:
```bash
npm run lint
```

Executar testes criados no projeto:
```bash
npm run test
```

Executar testes analisando a cobertura no código:
```bash
npm run test:coverage
```

## Deploy
O projeto foi implantado na [Netlify](https://www.netlify.com/), antes do build dos arquivos estáticos, é criado o arquivo `.env` de forma dinâmica na plataforma (com base nos valores inseridos na propria Netlify):
```bash
npm run env
```

Link público para acesso da aplicação: [https://hero-list.netlify.app/](https://hero-list.netlify.app/)

## Resumo estrutura de pastas e arquivos
* public: arquivos públicos, como `index.html` usado na aplicação.
* assets: layouts e imagens disponibilizadas para uso nas páginas.
* components: alguns dos elementos menores das páginas.
* pages: cada página disponibilizada para acesso, declaradas no arquivo de rotas (`routes.js`).
* services: hooks que fazem requisição para serviços externos.
* styles: estilização global e declaração dos temas.
* utils: funções e hooks reaproveitados no projeto.
