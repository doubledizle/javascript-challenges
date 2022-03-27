// Write a function that takes an array of numbers and multiplies them together in order

function grow(x){
  return x.reduce((a, b) => a * b, 1)
}

// Simplified

const grow = x => x.reduce((a, b) => a * b)
