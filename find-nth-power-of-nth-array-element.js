// Write a function that takes an array and a positive number for n, return a value for the nth index item to the power of n, otherwise return -1 if the array does not contain n index items.

// Using a standard function to check the length of the array

function index(arr, n) {
  if (arr.length > n) {
    return arr[n]**n
  }else {
    return -1
  }
}


// Refactored to an anonymous function

const index = (arr, n) => arr.length > n ? arr[n]**n : -1