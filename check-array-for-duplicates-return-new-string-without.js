// Write a function that takes an array and returns a new string that does not contain any duplicate elements

// Using the filter method

function distinct(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}


// Refactored into an anonymous function

const distinct = arr => arr.filter((elem, index) => arr.indexOf(elem) === index);


// Refactored to use Set

function distinct(arr) {
  return [...new Set(arr)];
}


// Refactored into an anonymous function

const distinct = arr => [...new Set(arr)]


