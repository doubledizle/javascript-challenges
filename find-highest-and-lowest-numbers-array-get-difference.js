// Write a function that takes an array of integers and returns a new array that has both the lowest and highest numbers, as well as the difference between them

function differenceInAges(ages){
  let sortedAges = ages.sort((a, b) => a - b)
  let length = sortedAges.length - 1
  return [sortedAges[0], sortedAges[length], sortedAges[length] - sortedAges[0]] 
}


// Simplified using the Math method

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
  
}


// Further simplified with an arrow function
  
const differenceInAges = ages => (min = Math.min(...ages),max = Math.max(...ages),[min, max, max - min])
