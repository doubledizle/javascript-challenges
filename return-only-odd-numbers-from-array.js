// Write a function that takes an array and returns only the odd numbers inside of it

function findOdds(values) {
  return values.filter(item => item % 2 != 0)
}


// Refactored into an arrow function

const odds = values => values.filter(item => item % 2 != 0)
