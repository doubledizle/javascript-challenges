/* Write a function that takes an array and updates all of the contained strings to add line numbering like so:
['1: a', '2: b', '3: c', '4: d'], an empty array should return an empty array */

function number(array) {
  if (array.length === 0)
    return array
  if (array.length > 0)
    return array.map((elem, index) => elem = (index + 1) + ': ' + elem)
}


// Refactored into an arrow function

const number = array => array.length === 0 ? array : array.map((elem, index) => elem = (index + 1) + ': ' + elem)
