// Write a function that searches an array of numbers for a specific value

function check(arr, val) {
  let found = arr.includes(val)
  return found
}

// Refactored into an arrow function

const check = (arr, val) => arr.includes(val)
