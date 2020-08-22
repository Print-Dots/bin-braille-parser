/**
 * @description This function concatenates arrays, transforming 6 point braille letters into 8 points
 * @method trasnformLetter
 * @param  {array} array
 * @param  {array} adition
 * @return {array}
 */
const trasnformLetter = (array, adition) => {
  let newLeter = []
  array.map(e => newLeter.push(e))
  newLeter.push(adition)
  return newLeter
}
module.exports = trasnformLetter