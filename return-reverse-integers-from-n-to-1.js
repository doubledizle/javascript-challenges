// Write a function that takes an integer value and returns an array of reverse integers from N to 1 

function reverseSeq(n) {
  let newArr = []
  for (i = n; i > 0; i--) {
    newArr.push(i)
  }
  return newArr
}