// Write a function that takes an array and returns the sum of the two smallest numbers

function sumTwoSmallestNums(numbers) {  
  let sorted = numbers.sort((a,b) => a-b)
  return sorted[0] + sorted[1]
}
