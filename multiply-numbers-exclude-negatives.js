// Write a function that takes two values and multiplies them together, but returns zero when a negative number is supplied for either value

function paperwork(num1,num2) {
  if ((num1 >= 0) && (num2 >= 0)) {
    return num1 * num2
  }else{
    return 0
  }
}


// Refactored into an arrow function

const paperwork = (num1, num2) => (num1 < 0) || (num2 < 0) ? 0 : num1 * num2
