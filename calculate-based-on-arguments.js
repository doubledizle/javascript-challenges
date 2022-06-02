/* Write a function that takes two numbers and a string and does math based on the operator passed in the string */

function arithmetic(a, b, op){
  return op === 'add' ? a + b : op === 'subtract' ? a - b : op === 'multiply' ? a * b : a / b
}
