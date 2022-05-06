// Write a function that takes numbers from an array and adds all of the positive numbers

function positiveSum(arr){
  let total = 0
  for (i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      total += arr[i]
    }
  }
  return total
}


// Return into an arrow function

const positiveSum = arr => arr.reduce((acc, c) => c > 0 ? acc + c : acc + 0)