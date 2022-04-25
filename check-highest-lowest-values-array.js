// Write a function that returns the lowest and the highest numbers in an array

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}


// Refactored into an arrow function

const minMax = arr => [Math.min(...arr), Math.max(...arr)]
