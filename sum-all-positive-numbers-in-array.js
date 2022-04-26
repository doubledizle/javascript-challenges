// Write a function that takes an array and returns the sum of only the positive numbers from that array

function positivSum(arr) {
  return arr.reduce((acc,c) => acc + (c >= 0 ? c : 0), 0) // check for positive number, add 0 if negative
}


// Refactored into an arrow function

const positiveSum = arr => arr.reduce((acc,c) => acc + (c >= 0 ? c : 0), 0)