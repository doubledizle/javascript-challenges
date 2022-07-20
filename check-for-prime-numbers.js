// Write a function that takes an integer and returns if it's a prime number or not

function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false
  return num > 1
}


// Refactored into an arrow function

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}
