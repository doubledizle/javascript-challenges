// Write a function that will take two numbers and returns true if one is odd and one is even, and returns false otherwise

function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 %2 !== 0){
    return true
  }else if(flower2 % 2 === 0 && flower1 % 2 !== 0){
    return true
  }else{
    return false
  }
}
