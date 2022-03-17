// Write a function that takes a number and outputs the powers of 2 up to that number

function powersOfTwo(n){
  let arr = []
  for(i = 0; i <= n; i++) {
    arr.push(Math.pow(2,i))
  }
  return arr
}
