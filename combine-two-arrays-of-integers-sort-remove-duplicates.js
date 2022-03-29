// Write a function that combines two arrays of integers, then sorts them, and finally removes any duplicates

function mergeArrays(arr1, arr2) {
  let numbers = arr1.concat(arr2).sort((a, b) => a - b);
  return [...new Set(numbers)]
}

