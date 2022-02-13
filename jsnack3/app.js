/*
let inputSum = 0;

for (let i=0; i<5; i++) {

    const userInput = parseInt(prompt("Inserisci un numero"));
    inputSum = inputSum + userInput;

}

console.log(inputSum);
*/

let inputSum = 0;

let i = 0;

while (i<5) {

    const userInput = parseInt(prompt("Inserisci un numero"));
    inputSum = inputSum + userInput;
    i++;

}

console.log(inputSum);