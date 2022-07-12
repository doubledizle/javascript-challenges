/* Write a function that takes an integer and keeps returning the digital root until there's only a single digit number */

function digital_root(n) {
  while(n > 9) {
    n = n.toString().split('').reduce((acc,c) => +acc + +c, 0)
  }
  return n
}
