// Write a function that takes an array and returns a new array that contains square root integers if the number has one, otherwise return the square of that number

// Using a foreach to build an array

function squareOrSquareRoot(array) {
  let newArr = []
  const root = Math.sqrt(x)
  array.forEach((x,i) => Number.isInteger(root) ? newArr.push(root) : newArr.push(x*x))
  return newArr
}


// Refactored using map

function squareOrSquareRoot(array) {
  return array.map(x => {
    const root = Math.sqrt(x);
    return (root % 1 == 0) ? root : (x*x)
  });  
}


// Refactored into an anonymous function

const squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : (x*x))
