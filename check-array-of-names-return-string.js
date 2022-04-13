// Write a function that takes an array of names and returns a string showing who liked something, similar to a social platform
// Depending on how many people like something, the string response varies

function likes(names) {
  if (names.length === 0) return `no one likes this`
  if (names.length === 1) return `${names[0]} likes this`
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  if (names.length  >  3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}


// Refactored into an anonymous function using nested ternary operators

const likes = names => names.length === 0 ? `no one likes this` :
  names.length === 1 ? `${names[0]} likes this` :
  names.length === 2 ? `${names[0]} and ${names[1]} like this` :
  names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`