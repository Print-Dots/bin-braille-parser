/**
 * @method parserTextToBinBraille
 * @param  {String} text - Text to be converted, like 'Awesome text'
 * @param  {Number} encoding - This is a Number to encoding, 6 for 6-point Braille (Conventional Braille) and 8 for Computer Braille Code
 * @return {Array} 
 */

const { sixPointsEncoding } = require('./schema/schema-6-points')
const { eightPointsEncoding } = require('./schema/schema-8-points')

async function parserTextToBinBraille (text, encoding = 6) {
  if (text === '' || text === undefined || text.length === 0) {
    return 0
  }

  let modifiedContent = []

  if (encoding === 8) {
    modifiedContent = await eightPointsEncoding(text)
  } else {
    return await sixPointsEncoding(text)
      .then(res => modifiedContent = res)
      .catch(err => console.log(err))
  }

  return modifiedContent
}

module.exports = {
  parserTextToBinBraille
}