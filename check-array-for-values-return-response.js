// Write a function that takes a weight and height value, calculates bmi, and returns weight classification

function bmi(weight, height) {
  let bmi = weight / height**2
  if (bmi <= 18.5)
    return "Underweight"
  if (bmi <= 25.0)
    return "Normal"
  if (bmi <= 30.0)
    return "Overweight"
  if (bmi > 30.0)
    return "Obese"
}

// Refactored into an anonymous function

const bmi = (weight, height, bmi = weight / height**2) =>  bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";