/* Write a function that takes a string of space separated words and returns a string sorted by the single integer  in each word */

// example: '2and th3at th1is' => 'th1is 2and th3at'


/* This function splits the string into separate words, sorts those words by the number alone, and joins the string back */

function order(words){
  const getNum = str => str.split('').sort().splice(0,1).join()
  return words.split(' ').sort((a,z) => getNum(a) - getNum(z)).join(' ')
}
