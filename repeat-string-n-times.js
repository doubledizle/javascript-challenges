// Write a function that takes a number and a string, and repeates the string n times

function repeatStr (n, s) {
  let total = ''
  for (i = 1; i <= n; i++){
    total += s;
  }
  return total;
}

// Refactored

function repeatStr (n, s) {
  return s.repeat(n);
}
