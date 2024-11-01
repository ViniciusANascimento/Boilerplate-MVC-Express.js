[![Node.js](https://img.shields.io/badge/node.js-20-brightgreen)](https://nodejs.org/)
[![ExpressJS](https://img.shields.io/badge/express-4.21.1-brightgreen)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/swagger-0.7.5-brightgreen)](https://www.npmjs.com/package/swagger)

# Boilerplate MVC com Express.js

Este é um projeto de boilerplate para uma aplicação em Node.js seguindo o padrão MVC (Model-View-Controller), utilizando o framework Express.js. É ideal para iniciar rapidamente um projeto estruturado e organizado.

## Sumário

- [Sobre](#sobre)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Scripts](#scripts)
- [Tecnologias](#tecnologias)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre

Este projeto é um ponto de partida para uma aplicação web com a estrutura MVC, onde:
- **Model**: Representa a lógica de dados e interações com o banco de dados.
- **View**: Gerencia o que é exibido para o usuário (no caso de APIs, pode ser omitido ou usado para templates HTML).
- **Controller**: Controla a lógica da aplicação e responde às requisições, processando dados e retornando respostas.

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```plaintext
project-root
│
├── src
│   ├── controllers      # Controladores da aplicação (lógica de requisições)
│   ├── models           # Modelos da aplicação (lógica de dados)
│   ├── data             # Arquivos de dados (caso necessario)
│   ├── routes           # Definições de rotas
│   ├── views            # Templates de visualização (caso necessário)
│   ├── repositories     # Funções de acesso a dados
│   ├── service          # Controlador das regras da aplicação
│   └── app.js           # Arquivo principal da aplicação
│   └── server.js           # Arquivo de inicialização do serviço.
│
├── public               # Arquivos públicos (CSS, JS, imagens)
├── config               # Configurações de banco de dados, variáveis de ambiente
├── .env                 # Variáveis de ambiente
├── .gitignore           # Arquivos e diretórios ignorados pelo Git
├── package.json         # Arquivo de configuração do Node.js
└── README.md            # Documentação do projeto
```
- **Guia de usabilidade**:
```plaintext
A - controllers
B - services
C - routes
D - model
E - App
    subgraph src
        A --> B
        B --> C
        C --> D **Não necessario utilizar models com javascript vanilla
        A --> E
        E --> F
    end
```
## Pré-requistos

- NodeJS e npm instalados
- Banco de dados configurado (caso o projeto faça uso);

## Instalação

1. Clone o repositorio:
```bash
 git clone https://github.com/ViniciusANascimento/Boilerplate-MVC-ExpressJS.git
 ```
2. Acesse o diretório do projeto:
```bash
 cd Boilerplate-MVC-ExpressJS
 ```
3. Instale as dependências:
```bash
 npm install
 ```
4. Configure as variáveis de ambiente:
- Altere o arquivo '.env' na raiz do projeto.
- Defina as variáveis necessárias, como porta da aplicação e configurações de banco de dados.
```plaintext
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
```

## Como Usar

Inicie o servidor em ambiente de desenvolvimento:
```bash
npm run start
```
* A aplicação estará rodando em http://localhost:3000 por padrão (ou a porta que você configurou).

## Scripts
- npm run dev - Inicia a aplicação em modo desenvolvimento.
- npm run dev:watch - Inicia a aplicação em desenvolvimento com hot-reload(nodemon)

## Tecnologias

- Node.js
- Express.js
- dotenv - Para gerenciar variaveis de ambiente
- nodemon - Para desenvolvimento com auto-reload

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

```plaintext

Esse `README.md` fornece uma visão geral clara do projeto e ajuda na instalação e uso do boilerplate MVC com Express em Node.js.

```
