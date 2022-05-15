// Write a function that takes a string of words and converts them to Pig Latin, making sure to ignore punctuation

function pigIt(str){
  let newArr = str.split(' ')
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] != '.' && newArr[i] != '!' && newArr[i] != '?'){
      newArr[i] = `${newArr[i].slice(1)}${newArr[i].slice(0,1)}ay`
    }
  }
  return newArr.join(' ')
}
