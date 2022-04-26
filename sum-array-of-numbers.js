// Write a function that takes an array of numbers in either string or integer format and returns their sum as an integer

function sum(numbers) {
  let acc = 0
  numbers.forEach( x => acc += +x)
  return acc
}

// Refactored using Reduce

function sum(numbers) {
  return numbers.reduce((acc, x) => acc + +x, 0)
}

// Refactored into an arrow function

const sumMix = x => x.reduce((acc, x) => acc + +x, 0)
