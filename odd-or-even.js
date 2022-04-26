// Write a function that takes a number and returns if the number is odd or even

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even'
  }else{
    return 'Odd'
  }
}


// Refactored into an arrow function

const evenOrodd = num => num % 2 === 0 ? 'Even' : 'Odd'