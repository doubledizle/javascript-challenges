// Write a function that takes a string and returns a new string that contains only the middle characters of the original string.

function getMiddle(s) {
  let x = s.length
  if (x % 2 === 0) {
    return s.slice((x / 2 - 1), (x / 2 + 1) )
  }else {
    return s.slice(Math.floor(x / 2), Math.floor(x / 2 + 1))
  }
}
