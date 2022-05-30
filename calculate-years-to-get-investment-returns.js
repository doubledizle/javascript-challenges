/* Write a function that takes a number of arguments: principal, interest rate, tax rate, and desired sum. Calculate how many years it will take to get the desired sum at those rates. Interest and taxes are both calculated each year, and profits are all reinvested. */

function calculateYears(prin, int, tax, sum) {
  let yearCount = 0
  for (let _; prin < sum; yearCount++ ) {
    prin += ((prin * int) * (1 - tax))
  }
  return yearCount
}
