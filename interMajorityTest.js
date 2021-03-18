const readlineSync = require('readline-sync')

let firstName = readlineSync.question('Prénom: ')
let name = readlineSync.question('Nom: ')
let age = readlineSync.question('Âge: ')

if (Number(age) < Number(process.argv[2])) {
  console.log(`Désolé, ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter`)
} else if (Number(age) >= Number(process.argv[2])) {
  console.log(`${firstName} ${name}, vous êtes majeur, vous pouvez voter`)
} else {
  console.log(`Entrez un âge valide`)
}
