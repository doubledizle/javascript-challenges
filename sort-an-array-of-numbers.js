/* Write a function that sorts an array of numbers smallest to largest, and returns an empty array on invalid inputs */

function solution(nums){
  if (nums)
    return nums.sort((a,z) => a - z)
  else
    return []
}


// Refactored into an arrow function

const solution = nums => nums ? nums.sort((a,z) => a - z) : []
