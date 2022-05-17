/* Write a function that takes a string and returns an integer value based on the length of the string, and a price parameter that contains a default price if one is not passed */

// Using a for loop

function billboard(name, price = 30){
  let total = 0
  for(i=0; i < name.length; i++) {
      total += price
  } 
  return total
}

// Refactored using Reduce

function billboard(name, price = 30){
  return name.split('').reduce((acc, c) => price + acc, 0)
}


// Refactored into an arrow function

const billboard = (name, price = 30) => name.split('').reduce((acc, c) => price + acc, 0)