const readlineSync = require('readline-sync')
const chalk = require('chalk')
let nb = readlineSync.question('Enter a number: ')

do {
  nb = readlineSync.question('Enter a number: ')
  if (isNaN(Number(nb)) === false) {
    if (Number(process.argv[2]) === Number(nb)) {
      console.log('Bravo!')
    } else if (Number(process.argv[2]) > Number(nb)) {
      console.log('Nombre trop petit')
    } else {
      console.log('Nombre trop grand')
    }
  } else {
    console.log('This is not a number! ')
  }
}
while (Number(process.argv[2]) !== Number(nb))