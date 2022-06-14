/* Write a function that takes an integer and returns the amount of times that through Collatz Conjecture algorithm before you reach the number 1 */

function hotpo(n) {
  let count = 0
    if (n == 0 || n == 1)
      return count
    while (n > 1) {
      if (n % 2 == 0) {
        n = n / 2
        count++
      }else {
        n = 3 * n + 1
        count++
      }
    }
  return count
}
