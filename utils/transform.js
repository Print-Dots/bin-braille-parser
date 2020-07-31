const trasnformLetter = (array, adition) => {
  let newLeter = []
  array.map(e => newLeter.push(e))
  newLeter.push(adition)
  return newLeter
}
module.exports = trasnformLetter