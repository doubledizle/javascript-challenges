// Write a function that takes an array and checks all elements inside for an odd number of the same integer

function findOdd(A) {
  for(let i = 0; i < A.length; i++){  
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i]
    }
  }
  return 0
}


// Refactored using an object to hold the data

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  })
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
