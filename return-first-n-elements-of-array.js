// Write a function that takes an array and returns the first n elements of it and

function take(arr, n) {
  return arr.slice(0, n);
}


// Refactored into an arrow function

const take = (arr, n) => arr.slice(0, n)