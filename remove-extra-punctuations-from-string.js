// Write a function that takes a string and removes any extra exclamation points, but always adds one at the end

function remove (string) {
  return string.split('!').join('') + '!'
}


// Refactored into an arrow function

const remove = s => s.split("!").join("") + "!"
