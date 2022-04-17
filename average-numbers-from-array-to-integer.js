// Write a function that takes an array of numbers and returns the average of those numbers in integer format

function getAverage(marks){
  let averageGrade = 0
  marks.forEach(num => averageGrade += num)
  return Math.floor(averageGrade / marks.length)
}

// Refactored using Reduce

function getAverage(marks){
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
}

// Refactored into an anonymous function

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length)
