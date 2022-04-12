// Write a function that takes two arrays and calculates the difference in the totals of all numbers being multiplied in their respective arrays. Each array always has three numbers.

function findDifference(a, b) {
  return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
}


// Refactored into an anonymous function

const findDifference = (a, b) => Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))