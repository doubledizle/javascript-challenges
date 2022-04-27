// Write a function that takes a string and returns the string with all numbers removed

function stringClean(str){
  return str.split('').filter((char) => char != parseInt(char)).join('')
}
