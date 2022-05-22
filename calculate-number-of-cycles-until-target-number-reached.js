// Write a function that takes arguments: starting population, percent of natural growth, people moving in per year, target population. Return the number of years it will take to get to the target population.

function numYears(startPop, growthPercent, moveIn, targetPop) {
  let years
  for (let i = 1, sum = startPop; sum < targetPop; i++) {
    sum += Math.floor((sum * (growthPercent * .01)) + moveIn)
    count = i
  }
  return years
}
