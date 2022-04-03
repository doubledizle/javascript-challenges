// Write a function that takes a number and returns the closest square number to it

function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)), 2)
}


// Refactored into an arrow function

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)
