
/**
 * @method parserTextToBinBraille
 * @param  {String} text
 * @param  {Number} encoding
 * @return {Array}
 */

const { sixPointsEncoding } = require('./utils/schema-6-points')
const { eightPointsEncoding } = require('./utils/schema-8-points')

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

module.exports =  {
  parserTextToBinBraille
}