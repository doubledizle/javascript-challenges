// Write a function that takes an array and returns the value that doesn't match the others

function findUniq(arr) {
  arr.sort((a, z) => a - z)
  return arr[0] === arr[1] ? arr.pop() : arr[0]
}
