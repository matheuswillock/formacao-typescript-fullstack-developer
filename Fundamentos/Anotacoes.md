# o que é o Typescript?

o typescript é uma linguagem e superset do javascript. Que adciona uma camada de tipagem ao JS, que permite um feedback mais rápido ao nosso código.

# Configuradno o ambiente Typescript

1. Instalar de o node na máquina.
2. instalar de forma global o pacote typescript 
    ` npm i -g typescript`
3. inicializar o node no projeto
   `npm init --y`
4. instalar a dependencia local do typescript 
    ` yarn add -D typescript`
5. instalar a dep ts-node-dev 
    ` yarn add -D ts-node-dev`
6. Inicializar o typescript no nosso projeto 
    ` npx tsc --init`
7. Criar um arquivo chamado app.ts
    ` type nul > app.ts`
8. Criar o transpilador do ts para js, pois o node não le arquivos ts somente ts.
    ` npx tsc app.ts`
9. Criar um script no package.json que vai ser responsável por transpilar e compilar nosso código 
    ` "dev": "ts-node-dev app.ts"`
10. Para rodar basta executar no terminal 
    ` yarn run dev`

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

### Decisões e repetições

- if/else

  ```typescript
  const typeUser = {
      admin: 'Seja bem vindo admin',
      student: 'Voce é um estudante',
      viewer: 'Voce pode vizualizar'
  }

  const validateUser = (user: string) => {
      console.log(typeUser[user as keyof typeof typeUser]);
  }

  const usuario = 'admin'

  validateUser(usuario); // Seja bem vindo admin
  validateUser('student'); // Voce é um estudante
  validateUser('viewer'); // Voce pode vizualizar
  ```
- for

  ```typescript
  for(let i = 0; i < 5; i++) {
  	console.log(i);
  }

  console.log('Done!')

  // 1
  // 2
  // 3
  // 4
  // Done!
  ```
- While

  ```typescript
  let n = 2;
  while(n < 6) {
     console.log(n)
     n++
  }
  ```
- Array

  um array é uma lista de determinados tipos de dados ou objetos.
  Manipulando arrays: Adcionando e removendo elementos, Buscando um elemento, Foreach x Map

  ```typescript
  const array: Array<number> = [1, 2, 3, 4]
  const stringArray: Array<string> = ['a', 'b', 'c', 'd', 'e']

  console.log(array[1]) //2;

  // lenght of array
  console.log(stringArray.length) // 5

  // add an element in array
  console.log('array original', stringArray); //a, b, c, d, e
  stringArray.push('f')
  console.log('array com o novo elemento', stringArray); //a, b, c, d, e, f
  // removendo o ultimo elemento do Array
  stringArray.pop(); 
  console.log('array com o o último elemento removido', stringArray); //a, b, c, d, e

  const buscaNum = array.find(num => num === 4)
  console.log(buscaNum) // 4

  array.forEach(num => console.log(num))
  // 1
  // 2
  // 3
  // 4

  array.map(num => {
      if (num > 2) {
          console.log(num);
      }
  })
  // 4
  // 3
  ```
