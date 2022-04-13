// Write a string that takes a string and replaces specific characters with other characters.

const correct = string => string.split('').map(x => x === '5' ? x = 'S' : x === '0' ? x = 'O' : x === '1' ? x = 'I' : x = x).join('')