// Write a function that takes an array and returns whether it contains a value or not.

function checkVal(vals){
  return vals.filter(elem => elem === 'thing').length >= 1
}


// Refactored to simplify using Includes and

function checkVal(vals){
  return vals.includes('thing')
}


// Refactored into an arrow function

const checkVal = vals => vals.includes('thing')
