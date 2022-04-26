// Write a function that takes an integer and returns a new integer with each digit squared away from
// eg: 9229 === 184418

function squareDigits(num){
  return Number(num.toString().split('').map(x => x * x).join(''))
}


// Refactored into an arrow function

const squareDigits = num => Number(num.toString().split('').map(x => x * x).join(''))
