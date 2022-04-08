function countSomething(arr) {
  let total = 0
  let length = arr.length
  for(i = 0; i < length; i++){
    if(arr[i] === true) {
      total++
    }
  }
  return total
}


// Refactored to use less code

function countSomething(arr) {
  return arr.filter(Boolean).length
}


// Reflected into an anonymous function

const countSomething = arr => arr.filter(Boolean).length
