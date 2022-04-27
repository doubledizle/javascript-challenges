// Write a function that takes a number and turns it into a negative number if it isn't one

function makeNegative(num) {
  if(num > 0){
    return -num
  }else{
    return num
  }
}


// Refactored into an arrow function

const makeNegative = num => num > 0 ? -num : num
