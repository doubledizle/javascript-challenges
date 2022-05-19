/* Write a function that takes an integer and multiplies it by 5 to the power of the length of the original number; Number can be negative */

// Need to get absolute value or else a negative string results in one extra length

function multiply(number){
  return number * 5**(Math.abs(number)).toString().length
}


// Refactored into an arrow function

const multiply = number => number * 5**(Math.abs(number)).toString().length