// let contador = 1;

// while (contador <= 5) {
//     console.log("Conatagem: ", contador);

//     contador++;
    
// }



// let tempo = 10;

// while (tempo > 0) {
//     console.log(`${tempo}....`);

//     tempo--;

// }


//  console.log("Feliz ano Novo");



// const senhaCoreta = "1234567";
// let tentativa = "";

// while (tentativa !==senhaCoreta) {

//     tentativa = prompt("Digite a senha: ");

//     if (tentativa === senhaCoreta) {
//         console.log("Senha correta! Acesso liberado.");
        
//     } else {
//          console.log("Senha incorreta! Tente Novamente.");

//     }
    
// }



// let soma = 0;
// let numero = 1;


//  console.log("Somando números até passar de 100...");


// while (soma < 100) {
    

//     soma += numero


//     console.log(`${numero} Soma parcial: ${soma}`);


//     numero++
// }



//  Faça uma tabuada

// let numero = Number(prompt("Qual tabuada vc quer ver: "));

// if (Number.isNaN(numero)) {
//     console.log("Digite um número válido!");
    
// } else {
//     let multiplicador = 1;

//      console.log(`Tabuada do ${numero}`);



// while (multiplicador <= 10) {
//     const resultado = numero * multiplicador;
//      console.log(`${numero} x ${multiplicador} = ${resultado}`);

//      multiplicador++
    
// }}




//  Serve para passar pelo menos uma vez no laço de repetição

// let opcao;

// do {
//     console.log("========= Menu =========");
//     console.log(" 1 - Ver Saldo");
//     console.log(" 2 - Fazer Depósito");
//     console.log(" 3 - Fazer saque");
//     console.log(" 0 - Sair");
//     console.log("=================");

//     opcao = prompt("Escolha uma opçao:");

// if (opcao === "1") {
//     console.log("Seu saldo é R$ 1000,00");
// } else if(opcao === "2"){
//     console.log("Depósito realizado");
// } else if (opcao === "3") {
//     console.log("Sque realizado!");
// } else if(opcao === "0") {
//     console.log("Até logo!");
// } else {
//     console.log("Opcao inválida!");
// }




// } while (opcao !== "0");


// Criar um número aleatório

// const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// let palpite;
// let tentativa = 0;

// console.log("Adivine o número entre 1 e 10!")

// do {
//     palpite = Number(prompt("Seu palpite:"));
//     tentativa++

//     if (Number.isNaN(palpite)) {
//         console.log("Adivine o número entre 1 e 10!")
        
        
//     } else if(palpite < numeroSecreto){
//         console.log("Muito baixo! Tente um número maior.")

//     } else if(palpite > numeroSecreto){
//         console.log("Muito alto! Tente um número menor.")
//     }else{
//          console.log(`ACERTOU! o número era${numeroSecreto}`);
//          console.log(`Voce precisou de ${tentativa} tentativa` );
//     }
        

// } while (palpite !== numeroSecreto);




// for (let i = 1; i <= 10; i++) {
//     console.log(`Número: ${i}`)
// }



let numero = Number(prompt("Qual tabuada vc quer ver: "));

if (Number.isNaN(numero)) {
    console.log("Digite um número válido!");
    
} else {


    for (let i = 1; i <= 10; i++){

    const resultado = numero * i;

    console.log(`Número: ${numero} x ${i} = ${resultado}`)

}
}

