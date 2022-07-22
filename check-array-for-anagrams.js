/* Write a function that takes a string and an array of words and returns a new array with only anagrams of the word in the string */

const anagrams = (word, words) => {
  const sortWord = (str) => str.split('').sort().join('')
  return words.filter(item => sortWord(item) === sortWord(word))
}
