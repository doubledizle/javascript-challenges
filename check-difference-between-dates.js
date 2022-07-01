/* Write a function that takes two dates and an integer, and returns true if the difference between the dates is greater than the integer supplied */

function periodIsLate(date1, date2, numDays) {
  const daysDiff = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))
  return daysDiff > numDays
}
