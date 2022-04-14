// Write a function that takes two numbers is string format (or empty strings, treated as zeros) and adds their values, then returns the value as a string

const sumStr = (a, b) => String(Number(a) + Number(b))


// Refactored even smaller

const sumStr2 = (a, b) => (+a + +b) + '' // + replaces Number, and summing an empty string with anything returns a string