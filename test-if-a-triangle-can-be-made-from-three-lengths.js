// Write a function that takes three numbers and returns true if the lengths can form a valid triange


function isTriangle(a,b,c) {
  let arr = [a,b,c].sort((a, z) => a - z)
  return a <= 0 || b <= 0 || c <= 0 ? false : arr[0] + arr[1] > arr[2]
}


// Refactored to simply compare sides without sorting

function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a
}
