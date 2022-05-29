/* Write a function that takes a string and validates it against the following rules: it must contain only digits, and it must only be 4 or 6 digits long */


// Return true if the pin is 4 or 6 digits long, and if it contains nothing but integers based on a regex check

function validatePIN (pin) {
  return (pin.length === 4 || pin.length === 6) && pin.replace(/\D/g, '').length === pin.length
}


// Refactored into an arrow function

const validatePIN = pin => (pin.length === 4 || pin.length === 6) && pin.replace(/\D/g, '').length === pin.length
