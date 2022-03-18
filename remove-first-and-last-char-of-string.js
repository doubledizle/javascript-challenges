// Write a function that removes the first and last characters of a string

// Array manipulation

function removeChar(str){
  let arr = str.split("")
  arr.shift()
  arr.pop()
  return arr.join("")
}

// Using slice method

function removeChar(str) {
  return str.slice(1, -1)
}

// Using substring method

function removeChar(str){
  return str.substring(1,str.length - 1)
}
