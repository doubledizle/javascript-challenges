// Write a function that takes two arrays and returns which numbers of the first are divisible by numbers of the second

function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}

// Simplified to a single line

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));
