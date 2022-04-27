/* Write a function that takes two years as whole numbers and calculates age based on those years, or calculates how many years until they will be born, and finally returns that they will be born this year if the inputs are the same */

function  calculateAge(birthYear, currentYear) {
  let age = 0
  if (birthYear < currentYear) {
    age = currentYear - birthYear
    if (age > 1) {
      return `You are ${age} years old.`
    }else {
      return `You are ${age} year old.`
    }
  }else if (birthYear > currentYear) {
    age = birthYear - currentYear
    if (age > 1) {
      return `You will be born in ${age} years.`
    }else {
      return `You will be born in ${age} year.`
    }
  }else {
    return `You were born this very year!`
  }
}

