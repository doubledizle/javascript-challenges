// Write a function that takes an array of numbers and returns their sum

function sum(numbers) {
  let total = 0
  numbers.forEach((x,i) => total += x)
  return total
}

// Simplified

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
