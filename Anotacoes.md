# o que é o Typescript?

o typescript é uma linguagem e superset do javascript. Que adciona uma camada de tipagem ao JS, que permite um feedback mais rápido ao nosso código.

# Configuradno o ambiente Typescript

1. Instalar de o node na máquina.
2. instalar de forma global o pacote typescript
   > npm i -g typescript
3. inicializar o node no projeto
   > npm init --y
4. instalar a dependencia local do typescript
   > npm i -D typescript
5. instalar a dep ts-node-dev
   > npm i -D td-node-dev
6. Inicializar o typescript no nosso projeto
   > npx tsc --init
7. Criar um arquivo chamado app.ts
8. Criar o transpilador do ts para js, pois o node não le arquivos ts somente ts.
   > npx tsc app.ts
9. Criar um script no package.json que vai ser responsável por transpilar e compilar nosso código
   > "dev": "ts-node-dev app.ts"
10. Para rodar basta executar no terminal
    > npm run dev

# Váriaveis e Tipos

## Sintaxe básica

### Variáveis

temos 3 formas de declarar variaveis em TS.

- var -> variável de escopo global
- let -> variável de escopo local
- const -> variável constante onde não é possível sobrescrever depois de declarada.

### Tipos primitivos

- string
- boolean
- number
- any
- Array
  - Declaramos array da seguinte formas:
    1.

    ```typescript
    const personList: Array<Person> = [
    	person1, person2, person3
    ]
    ```

    2. ```typescript
       const numberList: number[] = [
          1,2,3,4,5
       ]
       ```

### Objetos e Interfaces

#### Criando tipagem de objetos em TS

```typescript
interface Person { 
	name: string, 
	age: number 
}
```
