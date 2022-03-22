// Write a function that takes an array of integers and returns the inverse of each

function invert(array) {
  let newArray = []
  array.forEach((x,i) => newArray.push(x * -1))
  return newArray;
}

// Simpliefied

function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}
