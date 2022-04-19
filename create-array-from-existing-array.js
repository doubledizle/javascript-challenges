// Write a function that takes an array of numbers and returns a new array containing all numbers including and between the first and last numbers in the original array

function fillArray(numbers) {
  let newArr = []
  for (i = numbers[0]; i <= numbers[numbers.length -1]; i++) {
    newArr.push(i)
  }
  return newArr
}
