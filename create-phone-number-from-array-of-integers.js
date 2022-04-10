// Write a function that takes an array of ten integers and returns a US based phone number
// eg: (888) 555-1212

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx"
  for(i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }
  return format;
}

// Simplified with Reduce

function createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx")
}
