# APP

pet adoption api

## RFs (Requisitos funcionais)
- [X] Deve ser possível cadastrar um pet;
- [X] Deve ser possível cadastrar uma cidade;
- [X] Deve ser possível cadastrar um estado;
- [X] Deve ser possível filtrar pets por suas características;
- [X] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade;
- [X] Deve ser possível visualizar detalhes de um pet para adoção;
- [X] Deve ser possível se cadastrar como uma ONG;
- [X] Deve ser possível realizar login como uma ONG;

## RNs (Regras de negócio)
- [X] Para listar os pets, obrigatoriamente precisamos informar a cidade;
- [X] Uma ONG precisa ter um endereço e um número de WhatsApp;
- [X] Um pet deve estar ligado a uma ONG;
- [X] O usuário que quer adotar, entrará em contato com a ONG via WhatsApp;
- [X] Todos os filtros, além da cidade, são opcionais;
- [] Para uma ONG acessar a aplicação como admin, ela precisa estar logada;

## RNFs (Requisitos não funcionais)
- [X] A senha do usuário da ONG (admin) precisa estar criptografada;
- [] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] Todas listas de dados precisam estar páginadas com 20 itens por página;
- [] O usuário da ONG (admin) deve ser identificado por um JWT (json web token);