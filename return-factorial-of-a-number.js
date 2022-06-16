/* Write a function that takes a number and returns the factorial of that number from 0 to 12, throwing a RangeError outside of this range */

function factorial(n) {
  if (n === 0) {
    return 1
  }else if (n < 0 || n > 12){
    throw(RangeError())
  }else {
    let arr = []
    for (let i = n; i > 0; i--) {
      arr.push(i)
    }
    return arr.reduce((acc,c) => acc * c, 1)
  }
}
