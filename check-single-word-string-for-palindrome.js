// Write a function that takes a single word string, with possible uppercase and lowercase characters, and checks if it is a palindrome or not

const isPalindrome = x => x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
