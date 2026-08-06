// MAp > modifica o elemento 


// const novoArray = Array.map((element) => {

// });

// const pessoas = [
//   { nome: "Lucas", idade: 20 },
//   { nome: "Maria", idade: 17 },
//   { nome: "João", idade: 18 },
//   { nome: "Ana", idade: 22 },
// ];

// const nomes = pessoas.map((pessoa) => {
//     return pessoa.nome.toUpperCase();

// });

// console.log(nomes);

// const numeros = [1, 2, 3, 4, 5];

// const dobro = numeros.map((numero) => {
//     return numero * 2;
// });

    // console.log(dobro);

    // const produtos = ["mouse", "Teclado", "Monitor"];

    // const frase = produtos.map((produto) => {
    //     return `Protudo: ${produto}`

    // });

    // console.log(frase);



//     const pessoas = [
//   { nome: "Lucas", idade: 20 },
//   { nome: "Maria", idade: 17 },
// ];

// const resultado = pessoas.map((pessoa) => {
//     return {
//         nome: pessoa.nome,

//         maiorIdade: pessoa.idade >= 18
//     }
// });

// console.log(resultado);



// Use map para transformar um array de precos em precos com desconto de 10%

// const precos = [100, 200, 300];

// const precosComDesconto = precos.map((precos) => {
//     return precos * 0.9;

// });

// console.log(precosComDesconto);


// Use map para transformar: [1,2,3,4] em ["Numero 1", "Numero 2"....]



// const numeros = [1,2,3,4];

// const resultado = numeros.map((numero) => {
//      return `Número ${numero}`
// });

// console.log(resultado)



// FIND > Procura algo especifíco dentro do meu objeto.


// const pessoas = [
//   { nome: "Lucas", idade: 20 },
//   { nome: "Maria", idade: 17 },
//   { nome: "João", idade: 18 },
//   { nome: "Ana", idade: 22 },
// ];

// const maria = pessoas.find((pessoa) => {
//     return pessoa.nome === "Maria";
// })

// if (maria) {
//     console.log("Pessoa Encontrada");  
//     console.log(maria);  
// } else {
//     console.log("Pessoa Encontrada");
// }


// Procurar primeiro número maior que 18

// const numeros = [5,10,15,20,25];

// const numeroMaior18 = numeros.find((numero) => {
//     return numero > 18;
// })



//  Encontre o id 2
// const pessoas = [
//   { id: 1, nome: "Lucas", idade: 20 },
//   { id: 2, nome: "Maria", idade: 17 },
//   { id: 3, nome: "João", idade: 18 },
//   { id: 4, nome: "Ana", idade: 22 },
// ];


// const usuario = pessoas.find((u) => {
//     return u.id === 2;
// })

// console.log(usuario);




 //Encontre o primeiro número negativo do array.
// const numeros = [5,8,-2,10,-7];

// const numeroNegativo = numeros.find((numero) => {
//     return numero < 0;

// });

// console.log(numeroNegativo)



// REDUCE

// Array.reduce((acc, element) => {
//     return novoAcc
// } valorInicial);


// const numeros = [10, 20, 30];

// const soma = numeros.reduce((acc, numero) => {
      

//     console.log("ACC", acc);
//     console.log("Número Atual", numero);

//     return acc + numero

// }, 0);

// console.log(soma);



// const pessoas = [
//   { nome: "Lucas", idade: 20 },
//   { nome: "Maria", idade: 17 },
//   { nome: "João", idade: 18 },
//   { nome: "Ana", idade: 22 },
// ];

// const totalIdade = pessoas.reduce((acumulador, pessoas) => {
//     return acumulador + pessoas.idade

// }, 0);

// console.log(totalIdade);




// const pessoas = [
//   { nome: "Lucas", idade: 20 },
//   { nome: "Maria", idade: 17 },
//   { nome: "João", idade: 18 }
//   ];

//   const nomes = pessoas.reduce((acc, pessoa) => {

//     return acc + " " + pessoa.nome;

//   }, "");

//   console.log(nomes);


// const nomes = ["Lucas", "Maria", "Joao"];

// // const frase =  nomes.reduce((acc, nome) => {
// //     return acc + " " + nome;

// // });

// // console.log(frase);



// const nomes = ["Lucas", "Maria", "Joao"];

// const inicio = prompt("Digite o início da frase:");

// const frase = nomes.reduce((acumulador, nome) => {
//     return acumulador + " " + nome

// }, inicio);
// console.log(frase)




// const frase = prompt("Digite uma frase:");

// const palavras = frase.split(" ");
// console.log(palavras)

// const resultado = palavras.reduce((acumulador, palavra) => {
//        return acumulador + " " + palavra;


// });

// console.log(resultado);




// Use reduce para descobrir qual o maior número do array.
const numeros = [10,50,30,100,25];

const maior = numeros.reduce((acc, numero) => {
    
    if (numero > acc) {
        return numero
        
    }
    return acc

// pega pelo index
}, numeros[0])
