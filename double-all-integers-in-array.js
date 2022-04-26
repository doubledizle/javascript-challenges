// Write a function that takes an array and creates a new array with all integers doubled

function maps(x){
  let newArr = []
  x.forEach (n => newArr.push(n * 2))
  return newArr
}

// Refactored

function maps(x){
  return x.map(n => n * 2)
}

// Refactored into an arrow function

maps = x => x.map(e => e * 2)
