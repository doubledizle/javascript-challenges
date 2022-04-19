// Write a function that takes an ascii code and returns a string that contains the value of that code.

function getChar(c){
  return String.fromCharCode(c)
}


// Refactored into an anonymous function

const getChar = c => String.fromCharCode(c)
