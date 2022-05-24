/* Write a function that takes a string of words and reverses each word individually, but does not reverse their order */

// Split the string at spaces, Map each word to split and reverse it, then join all back into a string

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}


// Refactored into an arrow function

const reverseWords = str => str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
