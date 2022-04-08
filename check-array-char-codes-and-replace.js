// Write a function that takes an array and replaces specific character codes with their letter version

function isVow(arr){
  for (i=0; i<arr.length; ++i)
  {
    let y = String.fromCharCode(arr[i])
    if ('aeiou'.indexOf(char) !== -1)
    arr[i] = y;
  }
  
  return arr;
}


// Refactored into an anonymous function

const isVow = a => a.map(x=>'aeiou'.includes(y = String.fromCharCode(x)) ? y : x)
