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

## Union

-> Um tipo de união descreve um valor que pode ser um dos vários tipos. Usamos a barra vertical (|) para separar cada tipo, então numere | seqüência de caracteres | boolean é o tipo de valor que pode ser um número, uma string ou um booleano.

```typescript
function padLeft(value: string, padding: string | boolean) {
// ...
}

let indentedString = padLeft("Hello world", true);
```

## Generics

Sem os genéricos, teríamos que dar um tipo específico à função de identidade:
```typescript
function identity(arg: number): number {
	return arg;
}
```

Em vez disso, precisamos de uma forma de capturar o tipo do argumento de forma que também possamos usá-lo para denotar o que está sendo retornado. Aqui, usaremos uma variável de tipo, um tipo especial de variável que funciona com tipos em vez de valores.

```typescript
function identity<Type>(arg: Type): Type {
	return arg;
}

```ad-note 
title: Nota.

Embora o uso de any seja certamente genérico, pois fará com que a função aceite todo e qualquer tipo para o tipo de arg, na verdade estamos perdendo as informações sobre qual era esse tipo quando a função retorna
```



## Type

<font color="red">Type</font> nos permite abstratir um ou mais tipos para usar em um variaveis.


```typescript

type IdType = string | number | undefined
let userId: idType 
let adminId: idType

adminId = 10; #aceita string, number ou undefenid 
```
# Type Assertions 


Quando não se tem um type definido, mas voce espera algo em especifico, podemos usar o assertions para informar ao nosso objeto como ele será:

```typescript
type UserResponse = {
	id: number, 
	name: string, 
	avatar: string 
}

let userResponse = {} as UserResponse; 
```


# Type x Interface 

Ambas servem para criar tipagens, ou seja tem a mesma proposta.

Porém "interface" é usado para declarar uma estrutura de dados. E "type" pode ser usado para declarar tipos de dados mais avançados, como tipos de função e tipos de união, enquanto "interface" é usado principalmente para declarar objetos e classes

```typescript 
type TUser = {
	id: number, 
	name: string;
}

interface IUser {
	id: number, 
	name: string;
}


```



