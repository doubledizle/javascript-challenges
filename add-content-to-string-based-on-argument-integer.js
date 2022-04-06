// Write a function that takes an integer as an argument and returns a string that lists out counting something.

function counSomething(num){
  let str = ""
  for (i = 1; i > num; i++) {
    str += `${i} things. `
  }
}