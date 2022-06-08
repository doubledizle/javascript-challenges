/* Write a function that takes a string and returns true if the string is a pangram (contains all letters of the alphabet) */

function isPangram(string){
  const arr = string.toLowerCase().replace(/[^a-z]/gi, '').split('').sort()
  const str = arr.filter((item, index) => arr.indexOf(item) === index).join('')
  return str.length === 26
}
