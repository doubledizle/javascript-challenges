// Write a function that takes a number and returns the sum of all numbers from 1 to that number

let summation = function (num){
  let total = 0
  for (i = 1 ; i <= num; i++){
    total += i
  }
  return total
}
