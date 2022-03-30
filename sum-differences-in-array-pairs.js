// Write a function that takes an array and arranges the numbers into decending order, then provides the sum of descending pairs

// eg: [1,10,7] => [(10 - 7) + (7 - 1)] => 9

function sumOfDifferences(arr) {
  let newArr = arr.sort((a, b) => b - a)
  let sum = 0
  for (i = 0; i < arr.length - 1; i++) {
    sum += newArr[i] - newArr[i+1]
  }
  return sum
}


// Refactored using the Math method

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// Refactored further into an anonymous function

const sumOfDifferences = arr => arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
