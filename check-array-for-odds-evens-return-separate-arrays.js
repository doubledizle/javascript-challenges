// Write a function that takes an array of integers and returns two different arrays, one containing the evens and one containing the odds

function pickIt(arr){
  let odd = []
  let even = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0)
      odd.push(arr[i])
    if (arr[i] % 2 == 0)
      even.push(arr[i])
  }
  return [odd,even]
}


// Refactored to use filter instead of a for loop

function pickIt(arr){
  let odd = arr.filter(e => e % 2 != 0)
  let even = arr.filter(e => e % 2 == 0)
  return [odd,even]
}
