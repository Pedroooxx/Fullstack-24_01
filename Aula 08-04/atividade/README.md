# Projeto React com Funcionalidades Específicas

Este é um projeto React que implementa uma série de funcionalidades específicas em um componente principal. O projeto foi inicializado usando Create React App (CRA).

## Funcionalidades Implementadas

### 1. Botão de Alteração de Visibilidade

- Um botão que ao ser clicado altera a visibilidade de outro elemento ao seu lado, fazendo-o aparecer e desaparecer.

### 2. Validação de Input

- Um input com o seu valor mapeado para uma variável de estado e validação do valor. Uma mensagem de erro é apresentada ao lado do elemento se houver menos de 3 caracteres no input.

### 3. Inserção de Elemento ao Pressionar Enter

- Um input que, ao ser preenchido e a tecla Enter ser pressionada, insere um novo elemento `li` dentro de um elemento `ul`.

### 4. Separação do Conteúdo do Elemento LI em um Componente Específico

- O conteúdo do elemento `li` gerado foi separado em um componente específico chamado `Item`.

### 5. Passagem de Cor de Fundo para Elementos LI

- Um valor de propriedade é passado para o componente `Item`, indicando uma cor de fundo diferente para elementos `li` de índice par ou ímpar.

## Como Executar o Projeto

1. Clone este repositório para sua máquina local.
2. No diretório raiz do projeto, execute `npm install` para instalar as dependências.
3. Após a instalação das dependências, execute `npm start` para iniciar o servidor de desenvolvimento.
4. Abra o navegador e acesse `http://localhost:3000` para visualizar o projeto em execução.