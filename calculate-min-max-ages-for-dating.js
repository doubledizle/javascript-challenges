/* Write a function that takes an integer and returns a string with a number range which represents "optimum dating range", ie: "18-24" based on the following criteria */
// 15 and over: (age / 2) + 7 = min; (age - 7) * 2 = max
// 14 and under: return "No dating allowed!"

function datingRange(age){
  const min = Math.floor((age / 2) + 7)
  const max = Math.floor((age - 7) * 2)
  return age > 15 ? `${min}-${max}` : 'No dating allowed!'
}
