
/**
 * @method parserTextToBinBraille
 * @param  {String} text
 * @return {Array}
 */

function parserTextToBinBraille(text) {
  let newText = text.toLowerCase()
  let size = newText.length
  let parsedText = []
  const regex = /[0-9]/
  let numberIndicator = [['0', '1'], ['0', '1'], ['1', '1']]
  let index_aux = 0

  for (let i = 0; i < size; i++) {

    // For the normal letters and the basic simbols
    switch (newText[i]) {
      case ' ': parsedText[index_aux] = [['0', '0'], ['0', '0'], ['0', '0']]; index_aux++; break; // adding code-number for the spaces between words
      case '\n': parsedText[index_aux] = ['3']; index_aux++; break; // adding code-number for line breaks
      case 'a': parsedText[index_aux] = [['1', '0'], ['0', '0'], ['0', '0']]; index_aux++; break;
      case 'b': parsedText[index_aux] = [['1', '0'], ['1', '0'], ['0', '0']]; index_aux++; break;
      case 'c': parsedText[index_aux] = [['1', '1'], ['0', '0'], ['0', '0']]; index_aux++; break;
      case 'd': parsedText[index_aux] = [['1', '1'], ['0', '1'], ['0', '0']]; index_aux++; break;
      case 'e': parsedText[index_aux] = [['1', '0'], ['0', '1'], ['0', '0']]; index_aux++; break;
      case 'f': parsedText[index_aux] = [['1', '1'], ['1', '0'], ['0', '0']]; index_aux++; break;
      case 'g': parsedText[index_aux] = [['1', '1'], ['1', '1'], ['0', '0']]; index_aux++; break;
      case 'h': parsedText[index_aux] = [['1', '0'], ['1', '1'], ['0', '0']]; index_aux++; break;
      case 'i': parsedText[index_aux] = [['0', '1'], ['1', '0'], ['0', '0']]; index_aux++; break;
      case 'j': parsedText[index_aux] = [['0', '1'], ['1', '1'], ['0', '0']]; index_aux++; break;
      case 'k': parsedText[index_aux] = [['1', '0'], ['0', '0'], ['1', '0']]; index_aux++; break;
      case 'l': parsedText[index_aux] = [['1', '0'], ['1', '0'], ['1', '0']]; index_aux++; break;
      case 'm': parsedText[index_aux] = [['1', '1'], ['0', '0'], ['1', '0']]; index_aux++; break;
      case 'n': parsedText[index_aux] = [['1', '1'], ['0', '1'], ['1', '0']]; index_aux++; break;
      case 'o': parsedText[index_aux] = [['1', '0'], ['0', '1'], ['1', '0']]; index_aux++; break;
      case 'p': parsedText[index_aux] = [['1', '1'], ['1', '0'], ['1', '0']]; index_aux++; break;
      case 'q': parsedText[index_aux] = [['1', '1'], ['1', '1'], ['1', '0']]; index_aux++; break;
      case 'r': parsedText[index_aux] = [['1', '0'], ['1', '1'], ['1', '0']]; index_aux++; break;
      case 's': parsedText[index_aux] = [['0', '1'], ['1', '0'], ['1', '0']]; index_aux++; break;
      case 't': parsedText[index_aux] = [['0', '1'], ['1', '1'], ['1', '0']]; index_aux++; break;
      case 'u': parsedText[index_aux] = [['1', '0'], ['0', '0'], ['1', '1']]; index_aux++; break;
      case 'v': parsedText[index_aux] = [['1', '0'], ['1', '0'], ['1', '1']]; index_aux++; break;
      case 'x': parsedText[index_aux] = [['1', '1'], ['0', '0'], ['1', '1']]; index_aux++; break;
      case 'w': parsedText[index_aux] = [['0', '1'], ['1', '1'], ['0', '1']]; index_aux++; break;
      case 'y': parsedText[index_aux] = [['1', '1'], ['0', '1'], ['1', '1']]; index_aux++; break;
      case 'z': parsedText[index_aux] = [['1', '0'], ['0', '1'], ['1', '1']]; index_aux++; break;

      case ',': parsedText[index_aux] = [['0', '0'], ['1', '0'], ['0', '0']]; index_aux++; break;
      case ';': parsedText[index_aux] = [['0', '0'], ['1', '0'], ['1', '0']]; index_aux++; break;
      case ':': parsedText[index_aux] = [['0', '0'], ['1', '1'], ['0', '0']]; index_aux++; break;
      case '?': parsedText[index_aux] = [['0', '0'], ['1', '0'], ['0', '1']]; index_aux++; break;
      case '!': parsedText[index_aux] = [['0', '0'], ['1', '1'], ['1', '0']]; index_aux++; break;
      case '-': parsedText[index_aux] = [['0', '0'], ['0', '0'], ['1', '1']]; index_aux++; break;
      case '*': parsedText[index_aux] = [['0', '0'], ['0', '1'], ['1', '0']]; index_aux++; break;
      case '&': parsedText[index_aux] = [['1', '1'], ['1', '0'], ['1', '1']]; index_aux++; break;
      case '$': parsedText[index_aux] = [['0', '0'], ['0', '1'], ['0', '1']]; index_aux++; break;
      case '+': parsedText[index_aux] = [['0', '0'], ['1', '1'], ['1', '0']]; index_aux++; break;
      case '=': parsedText[index_aux] = [['0', '0'], ['1', '1'], ['1', '1']]; index_aux++; break;
      case '>': parsedText[index_aux] = [['1', '0'], ['0', '1'], ['1', '0']]; index_aux++; break;
      case '<': parsedText[index_aux] = [['0', '1'], ['1', '0'], ['0', '1']]; index_aux++; break;
    }

    // for numbers
    if (regex.test(newText[i])) {

      if (!regex.test(newText[i - 1])) {
        parsedText[index_aux] = numberIndicator
        index_aux++
      }

      switch (newText[i]) {
        case '0': parsedText[index_aux] = [['0', '1'], ['1', '1'], ['0', '0']]; index_aux++; break;
        case '1': parsedText[index_aux] = [['1', '0'], ['0', '0'], ['0', '0']]; index_aux++; break;
        case '2': parsedText[index_aux] = [['1', '0'], ['1', '0'], ['0', '0']]; index_aux++; break;
        case '3': parsedText[index_aux] = [['1', '1'], ['0', '0'], ['0', '0']]; index_aux++; break;
        case '4': parsedText[index_aux] = [['1', '1'], ['0', '1'], ['0', '0']]; index_aux++; break;
        case '5': parsedText[index_aux] = [['1', '0'], ['0', '1'], ['0', '0']]; index_aux++; break;
        case '6': parsedText[index_aux] = [['1', '1'], ['1', '0'], ['0', '0']]; index_aux++; break;
        case '7': parsedText[index_aux] = [['1', '1'], ['1', '1'], ['0', '0']]; index_aux++; break;
        case '8': parsedText[index_aux] = [['1', '0'], ['1', '1'], ['0', '0']]; index_aux++; break;
        case '9': parsedText[index_aux] = [['0', '1'], ['1', '0'], ['0', '0']]; index_aux++; break;
      }
    }
  }

  return parsedText
}

module.exports =  {
  parserTextToBinBraille
}