// Write a function that takes two strings and compares specific letters, returns true if they match, false otherwise.

const feast = (str1, str2) => (str1[0] === str2[0] && str1[str1.length-1] === str2[str2.length-1])