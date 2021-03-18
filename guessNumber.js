const readlineSync = require('readline-sync')
const chalk = require('chalk')
let nb = ''

do {

  nb = readlineSync.question('Enter a number: ')

  if (isNaN(Number(nb)) === false) {

    if (Number(process.argv[2]) === Number(nb)) {
      console.log(chalk.green('Bravo!'))
    } else if (Number(process.argv[2]) > Number(nb)) {
      console.log(chalk.red('Nombre trop petit'))
    } else {
      console.log(chalk.red('Nombre trop grand'))
    }
  } else {
    console.log(chalk.red('This is not a number!'))
  }
} while (Number(process.argv[2]) !== Number(nb))