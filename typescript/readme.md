
## Intro

Criado pela Microsoft com o objetivo de trazer um superset de tipagem para o javascript

```typescript

const person = {
	firstName: "Carlos",
	LastName: "Henrique",
	role: "Developer"
}

console.log(person.name)   


```
		Warning: Property 'name' does not exist on type '{ firtName: string; lastName: string .....}'



## Compilação

O TypeScript é sempre compilado para JavaScript, mas normalmente não estamos vendo isso. Observe os exemplos:

Código em TypeScript:

```tsx
function showTicket(user: string,  ticket: number) {
    console.log(`Olá ${user ?? 'Usuário Padrão'}. Seu número de bilhete é: ${ticket}`)
}

showTicket('João Inácio', 123)
```

Resultado da conversão para JavaScript:

```jsx
"use strict";
function showTicket(user, ticket) {
    console.log(`Olá ${user !== null && user !== void 0 ? user : 'Usuário Padrão'}. Seu número de bilhete é: ${ticket}`);
}
showTicket('João Inácio', 123);
```

