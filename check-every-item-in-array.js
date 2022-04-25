// Write a function that checks values of all array elements to match a function and return true if all elements match, false otherwise.

// Using a forloop

function all(arr, fun)
{
  var length = arr.length;
  
  for (var i=0; i<length; ++i)
    if (!fun(arr[i]))
      return false;
  
  return true;
}

// Refactored using the Every array method

function all( arr, fun ){
  return arr.every(fun)
}

// Refactored into an arrow function

const all = ( arr, fun ) => arr.every( fun )
