// Write a function that takes a string and changes dash or underscore case to camelCase

function toCamelCase(str){
  let newStr = str.split('').map(char => char === '-' || char === '_' ? char = ' ' : char = char).join('')
  return newStr.split(' ').map((word, index) => index === 0 ? word = word : word = word.split('').map((char, index) => index === 0 ? char = char.toUpperCase() : char = char).join('')).join('')
}
