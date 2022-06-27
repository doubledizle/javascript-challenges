// Write a function that takes two strings and compares them to see if they are anagrams of each other

function isAnagram(str1,str2) {
  return str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('')
}

// Refactored into an arrow function

const isAnagram = (str1,str2) => str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('')
