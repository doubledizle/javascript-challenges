// Write a function that takes a string of integers and turns any number below 5 to a 0, and any number 5 and above to a 1

function fakeBin(str){
  return str
  .split('')
  .map( (num, index) => num < 5 ? num = 0 : num = 1 )
  .join('')
}

// Simplified

fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');
