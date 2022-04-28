/* Write a function that takes a string and removes all exclamation points from the end, even if there are more than one */

function removeExlications(str) {
  while(str && str.slice(-1) === "!") { 
    str = str.slice(0,-1) 
  }
  return str
}