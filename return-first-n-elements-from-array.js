/* Write a function that takes an array and a number and returns the first n elements from the array. If n == 0 then return an empty array, and if n is not supplied then return the the first array element */

function first(arr, n) {
  return n ? arr.slice(0,n) : n == 0? [] : arr.slice(0,1)
}
