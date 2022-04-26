// Write a function that takes an array of strings and sorts them alphabetically, then returns the first element but with *** between each character

function twoSort(s) {
  const sorted = s.sort()
  const first = sorted[0].split('').join('***')
  return first
}

// Refactored into an arrow function

twoSort = s => s.sort()[0].split('').join('***')
