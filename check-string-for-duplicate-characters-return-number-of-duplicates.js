/* Write a function that takes a string and returns the number of duplicate characters in that string regardless of where they are at in the string */

function duplicateCount(text){
  let arr = text.toLowerCase().split('')
  let newArr = arr.filter((item, index) => arr.indexOf(item) != index)
  return [...new Set(newArr)].length
}
