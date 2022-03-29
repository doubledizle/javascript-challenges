// Write a function that returns true if the sum of a squared array (a) is greater than the sum of a cubed array (b), and returns false otherwise

function arrayMadness(a, b) {
  let aSquared = 0
  for (i = 0; i < a.length; i++) {
    aSquared += a[i] ** 2
  }
  
  let bCubed = 0
  for (i = 0; i < b.length; i++) {
    bCubed += b[i] ** 3  
  }
  
  return aSquared > bCubed
}


// Refactored with Reduce

function arrayMadness(a, b) {
  return a.reduce( (sum, el) => sum + el ** 2, 0) >
         b.reduce( (sum, el) => sum + el ** 3, 0)
}
