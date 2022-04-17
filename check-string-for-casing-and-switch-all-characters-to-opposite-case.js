// Write a function that takes a string and returns a new string with all of the casing reversed.
// eg: camelCase => CAMELcASE

function toAlternateCase(str) {
  return str
    .split("")
    .map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase())
    .join('')
}


// Refactored into an anonymous function

let toAlternateCase = str => str.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
