/* Write a function that takes a number and returns the next perfect square if the given number is a perfect square; return -1 otherwise */

// Check if the number is a perfect square
// If true, get square root, add 1, and square that for next perfect square, else return -1


function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1)**2 : -1
}


// Refactored into an arrow function

const findNextSquare = sq => Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1)**2 : -1
