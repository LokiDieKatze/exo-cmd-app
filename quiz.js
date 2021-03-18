const readlineSync = require('readline-sync')
let nb = 0

let tab1 = ['language', 'compilateur']
let ask1 = readlineSync.keyInSelect(tab1, 'Question 1: Le C++ est un:')

switch (ask1) {
  case 0:
    nb += 1
    break
  case 1:
    break
}

let tab2 = ['Vrai', 'Faux']
let ask2 = readlineSync.keyInSelect(tab2, 'Question 2: TypeScript est une évolution de Javascript:')
switch (ask2) {
  case 0:
    nb += 1
    break
  case 1:
    break
}

let tab3 = ['Vrai', 'Faux']
let ask3 = readlineSync.keyInSelect(tab3, 'Question 3: Lire les cours avant de faire les exercices est inutile:')
switch (ask3) {
  case 0:
    break
  case 1:
    nb += 1
}

let tab4 = ['Vrai', 'Faux']
let ask4 = readlineSync.keyInSelect(tab4, 'Question 4: react.js a été developpé par Google:')
switch (ask4) {
  case 0:
    break
  case 1:
    nb += 1
}

let tab5 = ['Vrai', 'Faux']
let ask5 = readlineSync.keyInSelect(tab5, 'Question 5: Ethereum est une blockchain publique:')
switch (ask5) {
  case 0:
    nb += 1
    break
  case 1:
}

console.log(`Merci pour votre participation.\nVous avez obtenu ${nb} bonnes réponses sur 5.`)
