// Write a function that takes an integer or number string and returns the binary value of the supplied number

// This function does not work properly on negative numbers

function toBinary(num){
  return Number(num.toString(2))
}


// Refactored into an arrow function

const toBinary = num => Number(num.toString(2))