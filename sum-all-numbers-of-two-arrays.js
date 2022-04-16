// Write a function that takes two arrays and returns the sum of all numbers from both arrays

function arrayPlusArray(arr1, arr2) {
  return (arr1.reduce((a, b) => a + b, 0)) + (arr2.reduce((a, b) => a + b, 0))
}


// Simpliefied with concat

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, c) => acc + c)
}
