/* Write a function that takes a number of objects, their width, and the distance between them, and returns the total distance between the first and last objects (not including the objects themselves) */

function pillars(num, width, dist) {
  return num === 1 ? 0 : ((num - 2) * width + (dist * (num - 1)))
}