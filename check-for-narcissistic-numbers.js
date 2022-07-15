/* Write a function that takes an integer and returns true if it's a narcissistic number */

/* A  narcissistic number is number that is the sum of its own digits each raised to the power of the number of digits */

function narcissistic(value) {
  return value === Number(value.toString().split('').reduce((acc,c) => acc + Math.pow(c, value.toString().length), 0))
}
