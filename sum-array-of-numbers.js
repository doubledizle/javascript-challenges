// Write a function that takes an array of numbers in either string or integer format and returns their sum as an integer

function sum(numbers) {
  let acc = 0
  numbers.forEach( x => acc += +x)
  return acc
}

// Simplified using reduce

function sum(numbers) {
  return numbers.reduce((acc, x) => acc + +x, 0)
}

// Further simplified to a single line

const sumMix = x => x.reduce((acc, x) => acc + +x, 0)
