// Write a function that takes a string and returns a string with all characters doubled

function doubleChar(str) {
  return str.split('').map(x => x + x).join('')
}


// Refactored into an anonymouse function

const doubleChar = str => str.split('').map(x => x + x).join('')