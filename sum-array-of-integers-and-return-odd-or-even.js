// Write a function that takes an array of integers and returns whether the sum is an odd or even number

function oddOrEven(array) {
  let acc = 0
  array.forEach( x => acc += +x)
  if (acc % 2 === 0) {
    return "even"
  }else{
    return "odd"
  }
}

// Refactored using Reduce

function oddOrEven(arr) {
  return arr.reduce((acc, x)=> acc + +x, 0) % 2 ? 'odd' : 'even'
}

// Refactored into an arrow function

const oddOrEven = a => a.reduce((acc, x) => acc + +x, 0) %2 === 0 ? "even" : "odd"
