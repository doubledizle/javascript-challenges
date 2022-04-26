// Write a function that takes an integer and multiplies it by a set amount, but then subracts a certain amount based on the value of the original argument integer

// Basic rental car calculation that discounts your overall cost based on the number of days your rent the car

function rentalCar(days) {
  let cost = days * 40 // basic rate of $40 a day
  if (days >= 7) {
    cost = cost - 50 // discount $50 from the total if rented for 7 or more days
  }else if (days >= 3)
    cost = cost - 20 // discount $20 from the total if rented for 3 or more days
  return cost
}


// Refactored into an arrow function using a Ternary statement as a value

const rentalCarCost = days => days * 40 - ((days >= 7) ? 50 : ((d >= 3) ? 20 : 0))
