// Write a function that searches through an array and returns that it found something, and the index position it was found in

function findNeedle(haystack) {
  
  let foundIt
  
  haystack.forEach((x,i) => {
    if(x === 'needle'){
      foundIt = "found the needle at position " + i.toString()
    }
  })
  return foundIt
}


// Simplified solution

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
