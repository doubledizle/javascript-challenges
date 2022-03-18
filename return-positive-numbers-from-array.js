// Write a function that takes an array of numbers and returns only the even numbers

function onlyEvens(arr){
  let evens = []
  
  arr.forEach(n => {
    if(n % 2 === 0) {
      evens.push(n)
    }
  })
  return evens
}

console.log(onlyEvens([1,2,3,4,5,6]))
