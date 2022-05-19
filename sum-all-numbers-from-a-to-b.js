/* Write a functino that takes two integers and returns the sum of all numbers including and between the two, returns the number if they are equal */

function getSum( a,b ) {
  if (a < b) {
    let sum = 0
    for (let i = a; i <= b; i++) {
      sum += i
    }
    return sum
  }else if (a > b) {
    let sum = 0
    for (let i = b; i <= a ; i++) {
      sum += i
    }
    return sum
  }else {
    return a
  }
}
