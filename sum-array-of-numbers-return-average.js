// Write a function that takes an array of integers and returns their average

let findAverage = function(nums) {
  return nums.reduce((acc,c) => acc + c, 0) / nums.length
}


// Refactored using an arrow function

const findAverage = nums => nums.reduce((acc, c) => acc + c, 0) / nums.length
