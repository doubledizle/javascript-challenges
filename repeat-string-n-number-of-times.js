// Write a function that takes a string and a number and returns a new string repeated n times

function repeatIt(str, n) {
  return typeof str === 'string' ? str.repeat(n) : 'Not a string'
}


// Refactored into an arrow function

const repeatIt = (str, n) => typeof str === 'string' ? str.repeat(n) : 'Not a string'