// Write a function that takes an array and removes every other elment from it starting at the second element

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
