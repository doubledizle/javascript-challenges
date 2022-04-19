// Write a function that works as an xor, meaning that it only returns true if just one of the passed arguments are true

function xor(a, b) {
  return a != b
}


// Refactored to an anonymous function

const xor = (a, b) => a != b