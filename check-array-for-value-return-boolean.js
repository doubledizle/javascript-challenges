// Write a function that takes an array and an item and returns true if the item is contained in the array, false otherwise

function include(arr, item){
  return arr.includes(item);
}


// Refactored into an arrow function

const include = (arr, item) => arr.includes(item)