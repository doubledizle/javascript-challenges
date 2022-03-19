// Write a function that takes an array of numbers and returns the value of all numbers squared

function squareSum(numbers){
  let total = 0
  numbers.forEach((x,i) => total += x * x)
  return total
}
