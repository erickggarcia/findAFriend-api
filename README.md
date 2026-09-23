# 🐾 Find A Friend API

API REST para adoção de animais. ORGs (organizações de proteção animal) cadastram pets disponíveis para adoção, e quem quer adotar encontra pets por cidade e características e entra em contato com a ORG pelo WhatsApp.

Projeto desenvolvido como desafio do Ignite Node.js (2022) da Rocketseat, seguindo princípios SOLID, com testes unitários e end-to-end.

---

## ✨ Funcionalidades

### Requisitos funcionais

- [x] Deve ser possível se cadastrar como uma ORG
- [x] Deve ser possível realizar login como uma ORG
- [x] Deve ser possível cadastrar um pet
- [x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- [x] Deve ser possível filtrar pets por suas características
- [x] Deve ser possível visualizar os detalhes de um pet para adoção

### Regras de negócio

- [x] Para listar os pets, é obrigatório informar a cidade
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp
- [x] Um pet deve estar ligado a uma ORG
- [x] O usuário que quer adotar entra em contato com a ORG via WhatsApp
- [x] Todos os filtros, além da cidade, são opcionais
- [x] Para acessar a aplicação como admin, a ORG precisa estar autenticada

### Requisitos não funcionais

- [x] A senha da ORG deve ser armazenada criptografada
- [x] Os dados devem ser persistidos em um banco PostgreSQL
- [x] A ORG deve ser identificada por um JWT (JSON Web Token)

---

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/) — framework HTTP
- [Prisma](https://www.prisma.io/) — ORM
- [PostgreSQL](https://www.postgresql.org/) — banco de dados (via Docker)
- [Zod](https://zod.dev/) — validação de dados e variáveis de ambiente
- [@fastify/jwt](https://github.com/fastify/fastify-jwt) — autenticação
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
│   └── middlewares/  # verificação de JWT
├── lib/              # instância do Prisma
├── repositories/     # contratos + implementações (Prisma e in-memory)
├── use-cases/        # regras de negócio
│   ├── errors/
│   └── factories/    # montagem dos use cases com suas dependências
├── app.ts
└── server.ts
```

Os use cases dependem apenas das interfaces dos repositórios (inversão de dependência). Nos testes unitários são usados repositórios em memória; nos testes E2E, o banco real.

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/erickgarcia/find-a-friend-api.git
cd find-a-friend-api

# 2. Instale as dependências
npm install

# 3. Crie o arquivo de variáveis de ambiente
cp .env.example .env

# 4. Suba o banco de dados
docker compose up -d

# 5. Rode as migrations
npx prisma migrate dev

# 6. Inicie o servidor em modo desenvolvimento
npm run start:dev
```

A API estará disponível em `http://localhost:3333`.

### Variáveis de ambiente

| Variável       | Descrição                         | Exemplo                                                             |
| -------------- | --------------------------------- | ------------------------------------------------------------------- |
| `NODE_ENV`     | Ambiente de execução              | `dev`                                                               |
| `PORT`         | Porta do servidor                 | `3333`                                                              |
| `JWT_SECRET`   | Chave de assinatura do JWT        | `uma-chave-secreta`                                                 |
| `DATABASE_URL` | URL de conexão com o PostgreSQL   | `postgresql://docker:docker@localhost:5432/findafriend?schema=public` |

---

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes unitários em modo watch
npm run test:watch

# Testes end-to-end (usam o banco do Docker)
npm run test:e2e

# Cobertura
npm run test:coverage
```

---

## 📌 Rotas

| Método | Rota             | Descrição                                   | Autenticação |
| ------ | ---------------- | ------------------------------------------- | ------------ |
| POST   | `/orgs`          | Cadastra uma ORG                            | ❌           |
| POST   | `/sessions`      | Autentica uma ORG e retorna o JWT           | ❌           |
| POST   | `/orgs/pets`     | Cadastra um pet vinculado à ORG logada      | ✅           |
| GET    | `/orgs/pets`     | Lista pets de uma cidade (com filtros)      | ❌           |
| GET    | `/orgs/pets/:id` | Retorna os detalhes de um pet               | ❌           |

### Filtros de busca

`GET /orgs/pets?city=Rio de Janeiro&age=puppy&size=small&energy_level=high&environment=indoor`

| Parâmetro      | Obrigatório | Descrição               |
| -------------- | ----------- | ----------------------- |
| `city`         | ✅          | Cidade da ORG           |
| `age`          | ❌          | Idade do pet            |
| `size`         | ❌          | Porte do pet            |
| `energy_level` | ❌          | Nível de energia        |
| `environment`  | ❌          | Ambiente ideal          |

---

## 📦 Build para produção

```bash
npm run build
npm start
```

---

## 👤 Autor

**Erick Garcia** — Backend Developer

[GitHub](https://github.com/erickgarcia)
