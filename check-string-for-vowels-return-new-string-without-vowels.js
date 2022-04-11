// Write a function that takes a string and returns a new string that does not contain any vowels.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}


// Refactored into an anonymous function that

const disemvowel = str => str.replace(/[aeiou]/gi, '')