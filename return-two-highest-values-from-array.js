// Write a function that takes an array and returns the two highest number values from it

function twoHighest(arr) {
  return [...new Set(arr)].sort((a,z) => z - a).slice(0,2)
}


// Refactored into an arrow function

const twoHighest = arr => [...new Set(arr)].sort((a,z) => z - a).slice(0,2)
