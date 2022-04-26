// Write a function that takes the width, heigh, and depth of a cube and returns the surface area and the volume within an array

function getSize(w, h, d) {
  let newArr = []
  newArr.push((w * h + w * d + h * d) * 2, (w * h * d))
  return newArr
}


// Refactored to use less code

function getSize(w, h, d) {
  return [(w * h + w * d + h * d) * 2, (w * h * d)]
}


// Refactored into an arrow function

const getSize = (w, h, d) => [(w * h + w * d + h * d) * 2, (w * h * d)]