const pyramid = (nbChar, char, reverse) => {

  for (let i = 0; i < Number(nbChar); i++) {
    switch (reverse) {
      case undefined:
        console.log(char.repeat(i + 1))
        break
      case '-r':
        console.log(char.repeat(Number(nbChar) - i))
        break
      default:
        console.log('error')
        break
    }
  }
}

pyramid(process.argv[2], process.argv[3], process.argv[4])

