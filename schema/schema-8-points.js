const alfabet = require('../utils/alfabet')
const trasnformLetter = require('../utils/transform')

async function eightPointsEncoding(text) {
  let newText = [...text]
  let size = newText.length
  let parsedText = []
  const regexForNumbers = /[0-9]/
  const regexCapitalLetters = /[A-Z]/
  let index_aux = 0

  const lastTwoPointsEmpty = ['0 ', '0']
  const lastTwoPointsFirstChecked = ['1', '0']
  const lastTwoPointsFull = ['1', '1']
  const lastTwoPointsSecondChecked = ['0', '1']

  for (let i = 0; i < size; i++) {

    switch (newText[i]) {
      case ' ': parsedText[index_aux] = [['0', '0'], ['0', '0'], ['0', '0'], ['0', '0']]; index_aux++; break;
      case null: parsedText[index_aux] = [['0', '0'], ['0', '0'], ['0', '0'], ['1', '0']]; index_aux++; break;

      case 'a': parsedText[index_aux] = trasnformLetter(alfabet()[0], lastTwoPointsEmpty); index_aux++; break;
      case 'b': parsedText[index_aux] = trasnformLetter(alfabet()[1], lastTwoPointsEmpty); index_aux++; break;
      case 'c': parsedText[index_aux] = trasnformLetter(alfabet()[2], lastTwoPointsEmpty); index_aux++; break;
      case 'd': parsedText[index_aux] = trasnformLetter(alfabet()[3], lastTwoPointsEmpty); index_aux++; break;
      case 'e': parsedText[index_aux] = trasnformLetter(alfabet()[4], lastTwoPointsEmpty); index_aux++; break;
      case 'f': parsedText[index_aux] = trasnformLetter(alfabet()[5], lastTwoPointsEmpty); index_aux++; break;
      case 'g': parsedText[index_aux] = trasnformLetter(alfabet()[6], lastTwoPointsEmpty); index_aux++; break;
      case 'h': parsedText[index_aux] = trasnformLetter(alfabet()[7], lastTwoPointsEmpty); index_aux++; break;
      case 'i': parsedText[index_aux] = trasnformLetter(alfabet()[8], lastTwoPointsEmpty); index_aux++; break;
      case 'j': parsedText[index_aux] = trasnformLetter(alfabet()[9], lastTwoPointsEmpty); index_aux++; break;
      case 'k': parsedText[index_aux] = trasnformLetter(alfabet()[10], lastTwoPointsEmpty); index_aux++; break;
      case 'l': parsedText[index_aux] = trasnformLetter(alfabet()[11], lastTwoPointsEmpty); index_aux++; break;
      case 'm': parsedText[index_aux] = trasnformLetter(alfabet()[12], lastTwoPointsEmpty); index_aux++; break;
      case 'n': parsedText[index_aux] = trasnformLetter(alfabet()[13], lastTwoPointsEmpty); index_aux++; break;
      case 'o': parsedText[index_aux] = trasnformLetter(alfabet()[14], lastTwoPointsEmpty); index_aux++; break;
      case 'p': parsedText[index_aux] = trasnformLetter(alfabet()[15], lastTwoPointsEmpty); index_aux++; break;
      case 'q': parsedText[index_aux] = trasnformLetter(alfabet()[16], lastTwoPointsEmpty); index_aux++; break;
      case 'r': parsedText[index_aux] = trasnformLetter(alfabet()[17], lastTwoPointsEmpty); index_aux++; break;
      case 's': parsedText[index_aux] = trasnformLetter(alfabet()[18], lastTwoPointsEmpty); index_aux++; break;
      case 't': parsedText[index_aux] = trasnformLetter(alfabet()[19], lastTwoPointsEmpty); index_aux++; break;
      case 'u': parsedText[index_aux] = trasnformLetter(alfabet()[20], lastTwoPointsEmpty); index_aux++; break;
      case 'v': parsedText[index_aux] = trasnformLetter(alfabet()[21], lastTwoPointsEmpty); index_aux++; break;
      case 'x': parsedText[index_aux] = trasnformLetter(alfabet()[22], lastTwoPointsEmpty); index_aux++; break;
      case 'w': parsedText[index_aux] = trasnformLetter(alfabet()[23], lastTwoPointsEmpty); index_aux++; break;
      case 'y': parsedText[index_aux] = trasnformLetter(alfabet()[24], lastTwoPointsEmpty); index_aux++; break;
      case 'z': parsedText[index_aux] = trasnformLetter(alfabet()[25], lastTwoPointsEmpty); index_aux++; break;

      // simbols
      case '!': parsedText[index_aux] = trasnformLetter([['0', '1'], ['0', '1'], ['1', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '"': parsedText[index_aux] = trasnformLetter([['0', '1'], ['0', '0'], ['0', '0']], lastTwoPointsEmpty); index_aux++; break;
      case '#': parsedText[index_aux] = trasnformLetter([['0', '0'], ['0', '1'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '$': parsedText[index_aux] = trasnformLetter([['0', '1'], ['0', '1'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '%': parsedText[index_aux] = trasnformLetter([['0', '1'], ['0', '0'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '&': parsedText[index_aux] = trasnformLetter([['1', '1'], ['1', '0'], ['1', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '’': parsedText[index_aux] = trasnformLetter([['0', '0'], ['0', '0'], ['1', '0']], lastTwoPointsEmpty); index_aux++; break;
      case '(': parsedText[index_aux] = trasnformLetter([['0', '1'], ['0', '1'], ['0', '0']], lastTwoPointsEmpty); index_aux++; break;
      case ')': parsedText[index_aux] = trasnformLetter([['0', '1'], ['0', '1'], ['1', '0']], lastTwoPointsEmpty); index_aux++; break;
      case ',': parsedText[index_aux] = trasnformLetter([['0', '0'], ['1', '0'], ['0', '0']], lastTwoPointsEmpty); index_aux++; break;
      case '-': parsedText[index_aux] = trasnformLetter([['0', '0'], ['0', '0'], ['1', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '.': parsedText[index_aux] = trasnformLetter([['0', '0'], ['1', '1'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '/': parsedText[index_aux] = trasnformLetter([['0', '1'], ['0', '0'], ['1', '0']], lastTwoPointsEmpty); index_aux++; break;
      case ':': parsedText[index_aux] = trasnformLetter([['0', '0'], ['1', '1'], ['0', '0']], lastTwoPointsEmpty); index_aux++; break;
      case ';': parsedText[index_aux] = trasnformLetter([['0', '0'], ['1', '0'], ['1', '0']], lastTwoPointsEmpty); index_aux++; break;
      case '<': parsedText[index_aux] = trasnformLetter([['0', '0'], ['1', '0'], ['1', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '=': parsedText[index_aux] = trasnformLetter([['0', '0'], ['1', '1'], ['1', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '>': parsedText[index_aux] = trasnformLetter([['0', '0'], ['0', '1'], ['1', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '?': parsedText[index_aux] = trasnformLetter([['0', '0'], ['1', '0'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
      case '@': parsedText[index_aux] = trasnformLetter([['0', '1'], ['1', '0'], ['1', '1']], lastTwoPointsFirstChecked); index_aux++; break;
      case '+': parsedText[index_aux] = trasnformLetter([['0', '0'], ['1', '1'], ['1', '1']], lastTwoPointsEmpty); index_aux++; break;
    }

    if (regexCapitalLetters.test(newText[i])) {
      switch (newText[i]) {
        case 'A': parsedText[index_aux] = trasnformLetter(alfabet()[0], lastTwoPointsFirstChecked); index_aux++; break;
        case 'B': parsedText[index_aux] = trasnformLetter(alfabet()[1], lastTwoPointsFirstChecked); index_aux++; break;
        case 'C': parsedText[index_aux] = trasnformLetter(alfabet()[2], lastTwoPointsFirstChecked); index_aux++; break;
        case 'D': parsedText[index_aux] = trasnformLetter(alfabet()[3], lastTwoPointsFirstChecked); index_aux++; break;
        case 'E': parsedText[index_aux] = trasnformLetter(alfabet()[4], lastTwoPointsFirstChecked); index_aux++; break;
        case 'F': parsedText[index_aux] = trasnformLetter(alfabet()[5], lastTwoPointsFirstChecked); index_aux++; break;
        case 'G': parsedText[index_aux] = trasnformLetter(alfabet()[6], lastTwoPointsFirstChecked); index_aux++; break;
        case 'H': parsedText[index_aux] = trasnformLetter(alfabet()[7], lastTwoPointsFirstChecked); index_aux++; break;
        case 'I': parsedText[index_aux] = trasnformLetter(alfabet()[8], lastTwoPointsFirstChecked); index_aux++; break;
        case 'J': parsedText[index_aux] = trasnformLetter(alfabet()[9], lastTwoPointsFirstChecked); index_aux++; break;
        case 'K': parsedText[index_aux] = trasnformLetter(alfabet()[10], lastTwoPointsFirstChecked); index_aux++; break;
        case 'L': parsedText[index_aux] = trasnformLetter(alfabet()[11], lastTwoPointsFirstChecked); index_aux++; break;
        case 'M': parsedText[index_aux] = trasnformLetter(alfabet()[12], lastTwoPointsFirstChecked); index_aux++; break;
        case 'N': parsedText[index_aux] = trasnformLetter(alfabet()[13], lastTwoPointsFirstChecked); index_aux++; break;
        case 'O': parsedText[index_aux] = trasnformLetter(alfabet()[14], lastTwoPointsFirstChecked); index_aux++; break;
        case 'P': parsedText[index_aux] = trasnformLetter(alfabet()[15], lastTwoPointsFirstChecked); index_aux++; break;
        case 'Q': parsedText[index_aux] = trasnformLetter(alfabet()[16], lastTwoPointsFirstChecked); index_aux++; break;
        case 'R': parsedText[index_aux] = trasnformLetter(alfabet()[17], lastTwoPointsFirstChecked); index_aux++; break;
        case 'S': parsedText[index_aux] = trasnformLetter(alfabet()[18], lastTwoPointsFirstChecked); index_aux++; break;
        case 'T': parsedText[index_aux] = trasnformLetter(alfabet()[19], lastTwoPointsFirstChecked); index_aux++; break;
        case 'U': parsedText[index_aux] = trasnformLetter(alfabet()[20], lastTwoPointsFirstChecked); index_aux++; break;
        case 'V': parsedText[index_aux] = trasnformLetter(alfabet()[21], lastTwoPointsFirstChecked); index_aux++; break;
        case 'X': parsedText[index_aux] = trasnformLetter(alfabet()[22], lastTwoPointsFirstChecked); index_aux++; break;
        case 'W': parsedText[index_aux] = trasnformLetter(alfabet()[23], lastTwoPointsFirstChecked); index_aux++; break;
        case 'Y': parsedText[index_aux] = trasnformLetter(alfabet()[24], lastTwoPointsFirstChecked); index_aux++; break;
        case 'Z': parsedText[index_aux] = trasnformLetter(alfabet()[25], lastTwoPointsFirstChecked); index_aux++; break;
      }
    }

    if (regexForNumbers.test(newText[i])) {
      switch (newText[i]) {
        case '0': parsedText[index_aux] = trasnformLetter([['1', '1'], ['1', '1'], ['1', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '1': parsedText[index_aux] = trasnformLetter([['1', '0'], ['0', '0'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '2': parsedText[index_aux] = trasnformLetter([['1', '0'], ['1', '0'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '3': parsedText[index_aux] = trasnformLetter([['1', '1'], ['0', '0'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '4': parsedText[index_aux] = trasnformLetter([['1', '1'], ['0', '1'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '5': parsedText[index_aux] = trasnformLetter([['1', '0'], ['0', '1'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '6': parsedText[index_aux] = trasnformLetter([['1', '1'], ['1', '0'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '7': parsedText[index_aux] = trasnformLetter([['1', '1'], ['1', '1'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '8': parsedText[index_aux] = trasnformLetter([['1', '0'], ['1', '1'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
        case '9': parsedText[index_aux] = trasnformLetter([['0', '1'], ['1', '0'], ['0', '1']], lastTwoPointsEmpty); index_aux++; break;
      }
    }

  }

  return parsedText
}

module.exports = {
  eightPointsEncoding
}