# 🐾 Find A Friend API

API REST para adoção de animais. ONGs de proteção animal cadastram pets disponíveis para adoção, e quem quer adotar encontra pets por cidade e características e entra em contato com a ONG pelo WhatsApp. Estados, cidades e outros administradores são cadastrados por usuários admin.

## ✨ Funcionalidades

### Requisitos funcionais

- [x] Deve ser possível se cadastrar como uma ONG
- [x] Deve ser possível realizar login como uma ONG
- [x] Deve ser possível cadastrar um pet
- [x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- [x] Deve ser possível filtrar pets por suas características
- [x] Deve ser possível visualizar os detalhes de um pet para adoção
- [x] Deve ser possível cadastrar um estado apenas por um ADMIN
- [x] Deve ser possível cadastrar uma cidade apenas por um ADMIN
- [x] Deve ser possível cadastrar um novo ADMIN apenas por outro ADMIN

### Regras de negócio

- [x] Para listar os pets, é obrigatório informar a cidade
- [x] Uma ONG precisa ter um endereço e um número de WhatsApp
- [x] Um pet deve estar ligado a uma ONG
- [x] O usuário que quer adotar entra em contato com a ONG via WhatsApp
- [x] Todos os filtros, além da cidade, são opcionais
- [x] Para cadastrar pets, a ONG precisa estar autenticada, e o pet é sempre vinculado à ONG do token

### Requisitos não funcionais

- [x] As senhas das ONGs e dos admins são armazenadas criptografadas
- [x] Os dados são persistidos em um banco PostgreSQL
- [x] As listagens de pets são paginadas com 20 itens por página
- [x] ONGs e admins são identificados por um JWT, que carrega o papel (`ONG` ou `ADMIN`)

---

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/) — framework HTTP
- [Prisma](https://www.prisma.io/) — ORM
- [PostgreSQL](https://www.postgresql.org/) — banco de dados (via Docker)
- [Zod](https://zod.dev/) — validação de dados e variáveis de ambiente
- [@fastify/jwt](https://github.com/fastify/fastify-jwt) — autenticação com access token e refresh token em cookie
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) — hash de senhas
- [Vitest](https://vitest.dev/) + [Supertest](https://github.com/ladjs/supertest) — testes unitários e E2E
- [tsx](https://github.com/privatenumber/tsx) e [tsup](https://tsup.egoist.dev/) — execução em desenvolvimento e build

---

## 🏗️ Arquitetura

O projeto separa as regras de negócio da camada HTTP e do banco de dados:

```
src/
├── env/              # validação das variáveis de ambiente
├── http/
│   ├── controllers/  # rotas e controllers (Fastify)
│   └── middlewares/  # verificação de JWT e de papel
├── lib/              # instância do Prisma
├── repositories/     # contratos + implementações (Prisma e in-memory)
├── use-cases/        # regras de negócio
│   ├── errors/
│   └── factories/    # montagem dos use cases com suas dependências
├── app.ts
└── server.ts
```

Os use cases dependem apenas das interfaces dos repositórios (inversão de dependência). Nos testes unitários são usados repositórios em memória; nos testes E2E, o banco real, com um schema isolado por arquivo de teste.

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/erickggarcia/findAFriend-api.git
cd findAFriend-api

# 2. Instale as dependências
npm install

# 3. Crie o arquivo de variáveis de ambiente
cp .env.example .env

# 4. Suba o banco de dados
docker compose up -d

# 5. Rode as migrations
npx prisma migrate dev

# 6. Crie o primeiro admin (usa ADMIN_EMAIL e ADMIN_PASSWORD do .env)
npm run db:seed

# 7. Inicie o servidor em modo desenvolvimento
npm run start:dev
```

A API estará disponível em `http://localhost:3333`.

### Variáveis de ambiente

| Variável       | Descrição                                       | Exemplo                                                               |
| -------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| `NODE_ENV`     | `development`, `production` ou `test`           | `development`                                                         |
| `port`         | Porta do servidor                               | `3333`                                                                |
| `JWT_SECRET`   | Chave de assinatura do JWT                      | `uma-chave-secreta`                                                   |
| `DATABASE_URL` | URL de conexão com o PostgreSQL                 | `postgresql://docker:docker@localhost:5432/findAFriend?schema=public` |
| `ADMIN_EMAIL`    | E-mail do primeiro admin, usado pelo seed     | `admin@findafriend.com`                                               |
| `ADMIN_PASSWORD` | Senha do primeiro admin (mínimo 6 caracteres) | `uma-senha-forte`                                                     |

### Admins

Todo usuário da tabela `users` é um admin do sistema. O primeiro é criado pelo seed (`npm run db:seed`); os seguintes são cadastrados por um admin já autenticado, via `POST /users/register`.

---

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes unitários em modo watch
npm run test:watch

# Testes end-to-end (precisam do banco do Docker rodando)
npm run test:e2e

# Cobertura
npm run test:coverage
```

---

## 📌 Rotas

Rotas autenticadas esperam o header `Authorization: Bearer <token>`. O token de acesso dura 10 minutos; o refresh token fica num cookie `httpOnly` e dura 7 dias.

### ONGs

| Método | Rota                 | Descrição                                       | Acesso |
| ------ | -------------------- | ----------------------------------------------- | ------ |
| POST   | `/ongs/register`     | Cadastra uma ONG                                | Público |
| POST   | `/ongs/authenticate` | Autentica uma ONG e retorna o JWT               | Público |
| POST   | `/ongs/refresh`      | Gera um novo JWT a partir do cookie de refresh  | Cookie |
| GET    | `/ongs/profile`      | Retorna os dados da ONG logada                  | ONG    |

### Pets

| Método | Rota                     | Descrição                                          | Acesso  |
| ------ | ------------------------ | -------------------------------------------------- | ------- |
| POST   | `/pets/register`         | Cadastra um pet vinculado à ONG logada             | ONG     |
| GET    | `/pets/fetch/:cityId`    | Lista os pets de uma cidade                        | Público |
| GET    | `/pets/filter/:cityId`   | Lista os pets de uma cidade filtrando por características | Público |
| GET    | `/pets/:id`              | Retorna os detalhes de um pet e o contato da ONG   | Público |

### Admins

| Método | Rota                  | Descrição                                       | Acesso  |
| ------ | --------------------- | ----------------------------------------------- | ------- |
| POST   | `/users/register`     | Cadastra um novo admin                          | ADMIN   |
| POST   | `/users/authenticate` | Autentica um admin e retorna o JWT              | Público |
| POST   | `/users/refresh`      | Gera um novo JWT a partir do cookie de refresh  | Cookie  |
| GET    | `/users/profile`      | Retorna os dados do admin logado                | ADMIN   |

### Estados e cidades

| Método | Rota                | Descrição                          | Acesso  |
| ------ | ------------------- | ---------------------------------- | ------- |
| GET    | `/states`           | Lista os estados                   | Público |
| GET    | `/states/:id`       | Retorna um estado                  | Público |
| POST   | `/states/create`    | Cadastra um estado (`name`, `uf`)  | ADMIN   |
| GET    | `/cities/:stateId`  | Lista as cidades de um estado      | Público |
| POST   | `/cities/create`    | Cadastra uma cidade (`name`, `stateId`) | ADMIN |

### Filtros de busca

`GET /pets/filter/:cityId?breed=Poodle&color=Branco&age=2&size=SMALL&page=1`

| Parâmetro | Obrigatório | Descrição                              |
| --------- | ----------- | -------------------------------------- |
| `cityId`  | ✅ (rota)   | Cidade onde a ONG fica                 |
| `breed`   | ❌          | Raça                                   |
| `color`   | ❌          | Cor                                    |
| `age`     | ❌          | Idade em anos                          |
| `size`    | ❌          | Porte: `SMALL`, `MEDIUM` ou `BIG`      |
| `page`    | ❌          | Página, com 20 pets cada (padrão `1`)  |

---

## 📦 Build para produção

```bash
npm run build
npm start
```

---

## 👤 Autor

**Erick Garcia** — Backend Developer

[GitHub](https://github.com/erickggarcia)
