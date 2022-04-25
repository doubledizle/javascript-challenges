// Write a function that checks and array for non-sequential numbers and returns the non-sequential number if one exists, or returns null if all numbers are sequential

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}

// Refactored using Find

function firstNonConsecutive (arr) {
    let result = arr.find((x, i) => x !== i + arr[0])
    return (Number.isInteger(result)) ? result : null
}

// Refactored into an arrow function

firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 !== arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1)) 
