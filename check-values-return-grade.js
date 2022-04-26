// Write a function that takes an exam argument and a projects argument and returns a grade based on criteria.

function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100
  }else if (exam > 75 && projects >= 5) {
    return 90
  }else if (exam > 50 && projects >= 2) {
    return 75
  }else {
    return 0
  }
}


// Refactored to simpler IF statments

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}


// Refactored using nested ternary operators

const finalGrade = (exam, projects) => {
  return (
    exam > 90 || projects > 10 ? 100 :
    exam > 75 && projects >= 5 ? 90 :
    exam > 50 && projects >= 2 ? 75 : 0
  )
}
