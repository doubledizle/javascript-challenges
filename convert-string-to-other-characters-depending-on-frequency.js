/* Write a function that takes a string and returns a new string of different characters depending on the frequency of each character in the original strings (should ignore casing)*/

// If a character shows up once, replace it with '('; if a character shows up more than once, replace it with ')'


function duplicateEncode(word){
  let newArr = []
  let newWord = word.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    if (newWord.split(newWord[i]).length -1 > 1) {
      newArr[i] = ')'
    }else {
       newArr[i] = '('
    }
  }
  return newArr.join('')
}
