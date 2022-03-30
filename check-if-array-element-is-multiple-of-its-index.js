// Write a function that checks to see if an array element is a multiple of its index value, and return that element to a new array if so

function multipleOfIndex(array) {
  let newArr = []
  for(i = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      newArr.push(array[i])
    }
  }
  return newArr
}


// Refactored using the Filter method

function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}
