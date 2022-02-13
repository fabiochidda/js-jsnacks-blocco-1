
let partyList = ["Andrea", "Marco", "Luca", "Matteo", "Giacomo"];
console.log(partyList)

const userName = prompt("Dimmi il tuo nome");
console.log(userName)

let userNameFound = 0;

for (let i=0; i < partyList.length; i++) {

    const partyMember = partyList[i];

    if (userName == partyMember) {
        
        userNameFound = 1

    }

}

if (userNameFound == 1) {

    alert("Puoi partecipare")

} else {

    alert("Non puoi partecipare")

}

console.log(userNameFound)