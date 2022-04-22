// Write a function that takes a string and removes an exclamation if one exists at the end of a string only

function remove (string) {
  let newArr = string.split('')
  if (newArr[string.length - 1] === '!')
    newArr.splice((string.length - 1), 1)
  return newArr.join('')
}
