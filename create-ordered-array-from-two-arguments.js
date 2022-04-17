// Write a function that takes two arguments and returns a string that contains all numbers including and hat contains all numbers between and including the supplied numbers.

function between(a, b) {
  let newArr = []
  for (i = a; i <= b; i++) {
    newArr.push(i)
  }
  return newArr
}
