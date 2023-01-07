
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


## Matrizes

Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:

```tsx
let numbers: number[];
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ['Rodrigo', 'João'];
```


## Funções

Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo `void`

Dessa maneira, tipamos dessa forma no TypeScript:

```tsx
function showMessages(message: string):void {
    console.log(message)
}
```

Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

```tsx
function showMessages(message: string) {
   return message;
}

console.log(showMessages("Oi, João"))
```
