// Write a function that takes numbers from an array and adds all of the positive numbers

function positiveSum(arr){
  var total = 0;    
  for (i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      total += arr[i];
    }
  }
  return total;
}
