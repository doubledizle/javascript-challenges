// Write a function that takes an array and returns a new array that only contains integer values, no string values

function filterList(arr) {
  return arr.filter(v => typeof v == 'number')
}


// Refactored into an arrow function

const filterList = arr => arr.filter(v => typeof v == 'number')