// Write a function that takes two integers and calculates the maximum points based on those numbers

function pointsPer48(ppg, mpg) {
  return mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0
}
