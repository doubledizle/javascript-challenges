// Write a function that takes and array of strings and returns an array that doesn't contain words from another array

function wordFilter (words) {
  let remove = ["Can't", "Give up", "Failure", "Impossible", "Never"];
  return words.filter(item => !remove.includes(item))
};

// Refactored into an arrow function

let remove = ["Can't", "Give up", "Failure", "Impossible", "Never"];
words => words.filter(item => !remove.includes(item))
