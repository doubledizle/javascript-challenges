// Write a function that takes two strings and returns the amount of times the second string is contained in the first

// Using a for loop to analyze the string like it's an array

function strCount(str, letter) {
  let y = 0
  for (i = 0; i < str.length; i++) {
    if (str[i] === letter)
      y = y + 1
  }
  return y
}


// Refactored to use less code using the split method

function strCount(str, letter) {  
  return str.split(letter).length - 1
}
