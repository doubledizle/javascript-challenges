/* Write a function that takes three arguments: beginning integer, ending integer, and number of steps per. Calculated the sum of the numbers that fit this criteria */

const sequenceSum = (begin, end, step) => {
  let total = 0
  for (let i = begin; i <= end; i += step) {
    total += i
  }
  return total
}
