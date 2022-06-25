// Write a function that takes an integer and returns the number of divisors it has

function getDivisorsCnt(n) {
  let count = 0
  let div = n
  while (div > 0) {
    if (n % div === 0) {
      count++
    }
    div--
  }
  return count
}
