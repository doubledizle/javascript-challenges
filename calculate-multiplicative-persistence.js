/* Write a function that takes an integer and calculates it's multiplicative persistence; the amount of times you can multiply each digit in the number to eventually have a single digit */

// example: 69 => 6*9 = 54 => 5*4 = 20 => 2*0 = 0


/* While num has more than one digit, turn num into a string, split to an array, join with the * operator, and use eval to get the value of this expression*/

function persistence(num) {
  let times = 0
  num = num.toString()
  while (num.length > 1) {
    num = eval(num.split('').join('*'))
    times++
  }
  return times
}


// Refactored using map and reduce instead of eval

function persistence(num) {
  let times = 0
  num = num.toString()
  while (num.length > 1) {
    num = num.split('').map(Number).reduce((a, b) => a * b).toString()
    times++
  }
  return times
}
