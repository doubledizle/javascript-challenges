// Write a function that takes a letter as a string and returns that letters number position in the alphabet

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return 'Position in the alphabet: ' + (alphabet.indexOf(letter) + 1)
}
