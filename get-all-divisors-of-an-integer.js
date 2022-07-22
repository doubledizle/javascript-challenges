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


// Refactored to reduce and compact code

function divisors(int) {
  for(var div = [], i = 2; i < int; i++) if(int % i === 0) div.push(i)
  return div.length > 0 ? div : int + " is prime"
}
