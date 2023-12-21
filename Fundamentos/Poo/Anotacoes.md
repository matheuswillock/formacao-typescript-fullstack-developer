# Programação Orientada a Objetos

## O que é?

É um paradigma de programação baseado no conceito de objetos, que podem conter dados na forma como atributos e códigos, na forma de procedimentos, como métodos.

### Criando uma classe do objeto User

```typescript
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = () => {
    console.log(this.name)
  }
};

const user = new User('Luffy', 17);
user.showName(); // Luffy
```

## Conceitos de Poo

### Abstração

É a capacidade de conseguir pensar no objeto que  iremo criar e como implementar seus métodos e atributos.

```typescript
class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("Voce depositou");
  }

  withdraw = () => {
    console.log("Voce sacou");
  }
  
}

const newAccount = new Account('Nami', 1234)
console.log(newAccount);

const newOtherAccount = new Account('Zoro', 4567)
console.log(newOtherAccount);

```

### Herança

Permite que uma classe compratilhe características com outra. É usada com o bjetivo de evitar repetião, reaproveitando atributos e métodos.

Para consguirmos utilizar a herança nós usamos a palavra reservada extends

Uma classe abstrata não pode ser instanciada mas ela pode ser herdada por outras classes.

```typescript

// Dio Banking

// Name, accountNumber
// Depositar e sacar

class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("Voce depositou");
  }

  withdraw = () => {
    console.log("Voce sacou");
  }
}

class Admin extends Account {
  balance: number;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
    this.balance = 20;
  }

  getValue = () => {
    console.log(this.balance);
  }
}

const adminAccount = new Admin('nami', 1234)
console.log(adminAccount);

const account = new Account('Zoro', 4567)
console.log(account);
```

herdando de uma classe abstrata

```typescript
// Dio Banking

// Name, accountNumber
// Depositar e sacar

abstract class DioAccount {
  name: string;
  accountNumber: number;
  balance: number = 0

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("Voce depositou");
  }

  withdraw = () => {
    console.log("Voce sacou");
  }

  getValue = () => {
    console.log(this.balance);
  }
}

class PeopleAccount extends DioAccount {
  doc_id: number;
  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}

class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = () => {
    console.log('Voce pegou um empréstimo')
  }
}

const peopleAccount = new PeopleAccount(987, 'nami', 1234)
console.log(peopleAccount);

const companyAccount = new CompanyAccount('Toei', 4561)
console.log(companyAccount);

```

### Modulando as classes

```typescript
// Dio Banking

import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount = new PeopleAccount(987, 'nami', 1234)
console.log(peopleAccount);

const companyAccount = new CompanyAccount('Toei', 4561)
console.log(companyAccount);

```

### Polimorfismo

permite que uma classe filha chame um método com assinatura diferente. Ou seja, o fluxo do método é diferente quando comparado com o original.

```typescript
import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = () => {
    console.log('Voce pegou um empréstimo')
  }

  deposit = (): void => {
    console.log('A empresa depositou');
  }
}
```
