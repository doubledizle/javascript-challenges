// Write a function that takes an integer and converts it to binary, then returns the number of 1's

function checkOnes(n) {
  const nBin = n.toString(2).split('')
  return nBin.filter(num => num === '1').length
}
