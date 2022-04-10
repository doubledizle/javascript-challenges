// Write a function that takes an array that is a binary number and returns the base 10 integer of that binary number

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2) // Join the array into a single string, then convert from base 2 to base 10 using parseInt
