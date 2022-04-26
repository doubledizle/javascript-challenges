// Write a function that takes an array of integers and returns the inverse of each

function invert(array) {
  let newArray = []
  array.forEach((x,i) => newArray.push(x * -1))
  return newArray;
}

// Refactored using Map

function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

// Refactored into an arrow function

const invert = arr => arr.map(x => x === 0 ? x : -x)
