# O que é o React?

É uma biblioteca Javascript de código aberto com foco em criar interfaces de usuário em páginas web.

## Configurando um ambiente React

- Instalar de forma global o package create-react-app
  `npm i -g create-react-app`
- Criar aplicação react com template typescript
  `npx create-react-app my-app --template typescript`

## Props Drilling

É uma forma de passar propriedades para os nossos componentes. Ou seja todo componente vai receber um objeto que vai receber por sua vez propriedades.

```typescript
interface Icard {
	id: number
	paragraph: string
	details: string
	event: () => {} // indica que a essa prop é uma function
}
```
