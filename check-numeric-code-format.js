// Write a function that takes a numeric code and returns true if the code begins with 1, 2, or 3, false otherwise

function validateCode (code) {
  let codeStr = code.toString()
  if (codeStr[0] == 1 || codeStr[0] == 2 || codeStr[0] == 3) {
    return true
  }else {
    return false
  }
}


// Refactored using Regex

function validateCode (code) {
  return /^[1-3]/.test(code)
}
