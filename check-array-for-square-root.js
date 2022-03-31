// Write a function that takes an array and returns a new array that contains square root integers if the number has one, otherwise return the square of that number

// Using a foreach to build an array

function squareOrSquareRoot(array) {
  let newArr = []
  let r = Math.sqrt(x)
  array.forEach((x,i) => Number.isInteger(r) ? newArr.push(r)) : newArr.push(x**2))
  return newArr
}


// Refactored using map

function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}


// Refactored into an anonymous function

const squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : (x*x))
