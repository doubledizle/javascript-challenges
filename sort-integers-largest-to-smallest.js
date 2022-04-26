// Write a function that takes an argument of a single whole integer and sorts it to make the largest integer possible
// eg: 1229745 => 9754221

function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''))
}


// Refactored into an arrow function

const descendingOrder = n => parseInt(n.toString().split('').sort().reverse().join(''))