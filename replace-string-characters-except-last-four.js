// Write a function that takes a string of integers and replaces all but the last 4 characters with #

// Using the Map method
function maskify(cc) {
  return cc.length > 4 ? cc.split('').map((e, i) => i < cc.length - 4 ? e = '#' : e = e).join('') : cc
}


// Refactored using Slice and Padstart
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}
