// Write a function that takes a string of comma separated numbers/words/phrases, removes the first and last values
// and returns the rmainder but with spaces instead of commas

function array(arr){
  let newArr = arr.split(',')
  newArr.shift()
  newArr.pop()
  if (newArr.length === 0) {
    return null
  }else{
    return newArr.join(' ')
  }
}

// Refactored

function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null
}
