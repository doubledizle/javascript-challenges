/* Write a function that takes a string and an integer and removes a specific character n number of times from the string */

function remove(str,n){
  for (let i = 0; i < n; i++)
    str = str.replace("!", "")
  return str
}

