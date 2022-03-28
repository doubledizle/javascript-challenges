// Write a function that takes an array and removes every other elment from it starting at the second element

function removeEveryOther(arr){
  let hold = []
  for (i = 0; i < arr.length; i += 2) {
    hold.push(arr[i])
  }
  return hold
}

// Simplified using Filter

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);
