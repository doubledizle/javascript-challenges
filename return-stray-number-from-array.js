// Write a function that takes an array of numbers and returns the value that doesn't match the rest

function stray(numbers) {
  let sorted = numbers.sort((a, z) => a - z)
  return sorted[0] != sorted[1] ? sorted[0] : sorted[sorted.length - 1]
}

