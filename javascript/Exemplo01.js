// VARIAVEIS
let num = 3;
let nome = "Raul";

// CONSTANTES
const TEXTO = "Hello World";

// UTILIZAÇÃO DO Console.LOG()
console.log(TEXTO);
console.log("Soma: " + num + 3);

// INTERPOLAÇÃO - TEMPLATE STRINGS
console.log(`Usuário Atual: ${ nome }`);
console.log(`Resultado: ${ num / 3 }`);

// FUNÇÕES NOMINAIS e ARROW FUNCTIONS

// Função SOMA escrita com Função Nominal
function soma(numero1, numero2){
    return numero1 + numero2;
}

// Função SOMA escrita com Arrow Functions
let somar = (numero1, numero2) => {
    return numero1 + numero2;
}

// Chamando a Função Nominal
console.log(`Somar: ${soma(6,5)}`)

// Chamando a Arrow Function
console.log(`Somar: ${somar(6,5)}`)

// Utilizando uma Arrow Function para deixar o códido mais simples
let numeros = [1,2,3,4];
numeros.forEach(
    (numero) => { console.log(numero) } // Usando a Arrow Function
);