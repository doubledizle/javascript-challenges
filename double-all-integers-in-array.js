// Write a function that takes an array and creates a new array with all integers doubled

function maps(x){
  let newArr = []
  x.forEach (n => newArr.push(n * 2))
  return newArr
}

// Simplified

function maps(x){
  return x.map(n => n * 2)
}

// Simplified further

maps = x => x.map(e => e * 2)
