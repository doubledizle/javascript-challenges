// Write a function that takes a string and reverses only the words that are 5 or more letters

function spinWords(string){
  return string.split(' ').map(e => e.length > 4 ? e.split('').reverse().join('') : e).join(' ')
}
