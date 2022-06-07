/* Write a function that takes an array of three numbers (instead of two for a standard Fibonacci) and adds them to get the next number up to N */

function tribonacci(sig,n){
  let arr = sig
  const len = arr.length
  
  for (let i = len; i < n; i++) {
    arr.push(arr[len - 1] + arr[len - 2] + arr[len - 3])
  }
  return arr.slice(0,n)
}
