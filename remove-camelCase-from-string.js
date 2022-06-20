/* Write a function that takes a string and removes any instances of camelCasing by adding a space between the words */

function solution(string) {
  return string.split('').map((e,i) => e === e.toUpperCase() ? e = ` ${e}` : e = e).join('')
}


// Refactored into an arrow function

const solution = string => string.split('').map((e,i) => e === e.toUpperCase() ? e = ` ${e}` : e = e).join('')
