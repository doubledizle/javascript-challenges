// Write a function that takes an array and returns a new array with their numbered position before each element (starting at 1, not their index value)

const number = array => array.map((elem,index) => `${index + 1}: ${elem}`)
