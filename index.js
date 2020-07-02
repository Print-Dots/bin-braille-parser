/**
 * @typedef {{ text: 'string', encoding: 'number' }} BinaryBinInstance
 * 
 * @method parserTextToBinBraille
 * @param  {String} text - Text to be converted, like 'Awesome text'
 * @param  {Number} encoding - This is a Number to encoding, 6 for 6-point Braille (Conventional Braille) and 8 for Computer Braille Code
 * @return {BinaryBinInstance} - The return can be 6 or 8 point braille, the default is 6 points
 */

const { sixPointsEncoding } = require('./schema/schema-6-points')
const { eightPointsEncoding } = require('./schema/schema-6-points')

async function parserTextToBinBraille (text, encoding = 6) {
  if (text === '' || text === undefined || text.length === 0) {
    return 0
  }

  let modifiedContent = []

  if (encoding === 8) {
    modifiedContent = await eightPointsEncoding(text)
  } else {
    modifiedContent = await sixPointsEncoding(text)
  }

  return modifiedContent
}
let p = parserTextToBinBraille('a', 6)

p.then(function res(result) {
  console.log(result)
})

module.exports = {
  parserTextToBinBraille
}