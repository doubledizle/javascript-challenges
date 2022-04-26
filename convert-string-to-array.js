// Write a function that takes and string and returns and array of words from that string

// Standard function syntax
function stringToArray(string){
  return string.split(' ');
}

// Refactored into an arrow function

const stringToArray = string => string.split(' ') // Splits the string to create an array of words separated by a space
