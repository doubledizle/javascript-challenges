// Write a function that takes an integer and returns all of its divisors except for 1 and itself

function divisors(integer) {
  let divisors = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0){
      divisors.push(i)
    }
  }
  return divisors.length === 0 ? `${integer} is prime` : divisors
}
