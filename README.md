# APP

pet adoption api

## RFs (Requisitos funcionais)
- [] Deve ser possível cadastrar um pet;
- [] Deve ser possível filtrar pets por suas características;
- [] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade;
- [] Deve ser possível visualizar detalhes de um pet para adoção;
- [] Deve ser possível se cadastrar como uma ORG;
- [] Deve ser possível realizar login como uma ORG;

## RNs (Regras de negócio)
- [] Para listar os pets, obrigatoriamente precisamos informar a cidade;
- [] Uma ORG precisa ter um endereço e um número de WhatsApp;
- [] Um pet deve estar ligado a uma ORG;
- [] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp;
- [] Todos os filtros, além da cidade, são opcionais;
- [] Para uma ORG acessar a aplicação como admin, ela precisa estar logada;

## RNFs (Requisitos não funcionais)
- [] A senha do usuário da org (admin) precisa estar criptografada;
- [] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] Todas listas de dados precisam estar páginadas com 20 itens por página;
- [] O usuário da org (admin) deve ser identificado por um JWT (json web token);