/*
let i = 10;

while(i> 1){
console.log(i)
i--;
}


let numeros = [];

const chamarPrompt = () => {
    const numero = Number(prompt("Digite um número"));
numeros.push(numero);
};
while (!numeros.includes(0)){
    chamarPrompt();
}
if (numeros.includes(0)) {
    let i = 0;
    let soma = 0;
    while (i < numeros.length - 1) {
        soma = soma + numeros[i];
        i++;
    }
    console.log(soma)}
    
    
    exercicio 1: Será imprimido 10 no console

    exercicio 2: a) 19, 21, 23, 25, 27, 30 será imprimido
    b) While

    exercicio 3: 5 *****

exercicio 1 escrita:

const animal = prompt("Quantos bichinhos de estimação vc tem?");
if (animal <= 0) {
  console.log("Que pena!Você pode adotar um pet");
} else {
  let nomes = [];
  for (i = 0; i <= animal; i++) {
    const pergunta = prompt("Quais são os nomes?");
    nomes.push(pergunta);
  }
  console.log(nomes);
}

exercicio 2 escrita:
*/
const valorOriginal = [0, 1, 2 , 3 ,4 ,5 ,6, 7 ,8 ,10]
const valor = ()=> {
for(let valor of valorOriginal){
console.log(valorOriginal)}
}
//b
vezesDez = () => {
  for(let numero of valorOriginal){
        console.log(numero * 10)
    }
  }
//c)
vezesDez()
pares = () => {
  for(let numero of valorOriginal){
    if(numero % 2 == 0){
      console.log(numero)
    }
  }
}
pares()  
//d)
let index = []
novo = () => {
  for(let numero of valorOriginal){
      let frase = ("O elemento do index", numero, "é", valorOriginal.indexOf(numero)) }
      index.push(frase)
  
  }

  console.log(index)


//e)
const maiorValor = 10;
for (let i = 0; i < valorOriginal.length; i++) {
  let valorAtual = valorOriginal[i];

  if (valorAtual >= maiorValor) {
    maiorValor == valorAtual;
  }
}

const menorValor = 0;
for (let i = 10; i > valorOriginal.length; i--) {
  let valorAtual = valorOriginal[i];

  if (valorAtual <= menorValor) {
    menorValor == valorAtual;
  }
}

console.log("O maior valor é", maiorValor, "e o menor valor é", menorValor)
