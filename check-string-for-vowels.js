// Write a function that takes a string and returns the number of vowels in it

function getCount(str) {
  var vowelsCount = 0;
  
  for (i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/)) {
      vowelsCount++
    }
  }
  return vowelsCount;
}

// Simplified

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
