// Write a function that sums all of the multiples of 3 and 5 that are below the supplied n
// Only count numbers once if they are divisibe by both

function solution(number){
  let total = 0
  for (i = 1; i < number; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      total += i  
    }
  }
  return total
}
