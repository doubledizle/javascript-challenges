// Write a function that takes an array of integers and returns their average

let findAverage1 = function(nums) {
  return nums.reduce((acc,c) => acc + c, 0) / nums.length
}


// Refactored uinto an arrow function

const findAverage2 = nums => nums.reduce((acc, c) => acc + c, 0) / nums.length
