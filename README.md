# Projeto automação WEB com Cypress

Projeto de automação web com Cypress e adicionando o teste no Github Action.

## Pré requisitos para utilizar o projeto

### NodeJS
- Node.js 18.x
- Node.js 20.x ou superior

### IDE
- VSCODE
- Qualquer outra de sua preferência

### Links de instalação
- NodeJs - https://nodejs.org/en/download
- VSCODE - https://code.visualstudio.com/download

### Documentos de referência
- Cypress:
    - https://www.cypress.io/
    - https://example.cypress.io/commands/actions
    - https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-Structure


## Configurando ambiente para começar a usar o Cypress
Agora iremos configurar o ambiente para iniciarmos nosso projeto com o Cypress. Para isso é necessário realizar o download da IDE do VSCODE 

### 01 Instalação inicial
- Faça o download o NodeJS e instale a versão compatível com seu Sistema Operacional;
- Faça o download e instale o VSCODE ou outra IDE de sua preferência;

### 02 Instale o Cypress
```bash
npm install cypress --save-dev
```

### 03 Observação
Está configurado no package.json, um bloco de script para executar o cypress

```bash
"scripts": {
    "cypress:open": "cypress open"
    "cypress:run": "cypress run"
  }
```
A sintaxe "cypress:open" determina como será executado o cypress, recebendo a instrução padrão "cypress open"
A sintaxe "cypress:run" determina como será executado o cypress em modo adds, adicionado no package.json.

### 04 Executando o cypress

```bash
   npm run cypress:open
```

Pronto agora é só criar seus cenários de testes e aproveitar o melhor da ferramenta.

