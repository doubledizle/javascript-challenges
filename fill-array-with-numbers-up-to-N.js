// Write a function that takes a number and returns an array of sequential numbers starting at 0 and ending at N

function arr(n) {
  let newArr = []
  for (i = 0; i < n; i++) {
    arr.push(i)
  }
  return newArr
}


// Refactored into an arrow function using array methods

const reverseSeq = n => {
  return Array(n).fill(0).map((x, i) => n - i )
}