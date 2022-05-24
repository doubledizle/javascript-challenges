/* Write a function that takes an array of arrays that contain integer pairs that adds the first number and subtracts the second number, and returns the final result from all array elements */

// Iterate over the array and add the first element, subtrac the second, tally all to the accumulator

let number = function(arr) {
  return arr.reduce((acc,c) => acc + c[0] - c[1], 0)
}

// As a standard function

function number (arr) {
  return arr.reduce((acc,c) => acc + c[0] - c[1], 0)
}


// Refactored into an arrow function

const number = arr => arr.reduce((acc,c) => acc + c[0] - c[1], 0)
