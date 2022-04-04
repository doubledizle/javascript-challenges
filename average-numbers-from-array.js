// Write a function that takes an array and returns the average of the numbers within
// Return 0 on an empty array

function find_average(array) {
  if (array.length === 0)
    return 0

  let result = 0
  for (i=0; i<array.length; i++) {
    result +=array[i]
  }
  return result/array.length
}


// Refactored into an anonymous function

const find_average = array => array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length