// Write a function that takes a string and returns an array of each space separated element, and adds the length of the element to the end of each element

// eg: ('you are great') => ['you 3', 'are 3', 'great 5']

function addLength(str) {
  const newArr = str.split(' ')
  for (i = 0; i < newArr.length; i++) {
    newArr[i] = `${newArr[i]} ${newArr[i].length}`
  }
  return newArr
}


// Refactored using map

const addLength = str => str.split(' ').map(elem => elem + ' ' + elem.length)
