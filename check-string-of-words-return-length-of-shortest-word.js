// Write a function that takes a string of words and returns the length of the shortest word in the string

function findShort(s){
  return s.split(' ').sort((a, z) => a.length - z.length)[0].length
}


// Refactored into an arrow function

const findShort = s => s.split(' ').sort((a, z) => a.length - z.length)[0].length
