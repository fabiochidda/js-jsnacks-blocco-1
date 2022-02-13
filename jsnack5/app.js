let emptyArray = [];

for (let i=0; i < 6; i++) {

    let userInput = parseInt(prompt("Inserisci un numero"))

    if(userInput % 2 == 0) {

        // Non sapevo come creare la condizione per cercare solo i numeri dispari senza vedere se non sono pari e creare un if vuoto

    } else {

        emptyArray.push(userInput)

    }
}

console.log(emptyArray)