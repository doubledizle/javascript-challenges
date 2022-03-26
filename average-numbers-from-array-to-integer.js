// Write a functino that takes an array of numbers and returns the average of those numbers in integer format

function getAverage(marks){
  let averageGrade = 0
  marks.forEach((num,index) => averageGrade += num)
  return Math.floor(averageGrade / marks.length)
}

// Simplified

function getAverage(marks){
  return Math.floor(marks.reduce((num, x) => num + x) / marks.length);
}

// Further simplified

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);
