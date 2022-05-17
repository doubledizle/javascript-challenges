/* Write a function that takes a string and returns the total of all ASCII character codes of each character in the string */

// Turn the string into an Array, then Reduce the values of each character

function uniTotal (string) {
  return string.split('').reduce((acc,c) => acc + c.charCodeAt(0), 0)
}


// Refactored into an arrow function

const uniTotal = string => string.split('').reduce((acc,c) => acc + c.charCodeAt(0), 0)