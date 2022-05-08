/* Write a function that takes three arguments: 2 numbers, and a math symbol, and returns the value of the calculation */

function calculator(a,b,sign) {
  switch(sign) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/': return a / b
  default: return 'unknown value'
  }
}
