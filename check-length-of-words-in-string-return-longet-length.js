// Write a function that takes a string of multiple words and returns the value of the longest individual word

const findLongest = str =>
  Math.max(...str.split(` `).map(elem => elem.length))
