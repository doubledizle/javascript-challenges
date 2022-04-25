// Write a function that takes a string that represents a 2 word name and abbreviates it, eg: D.D.

function abbrevName(name) {
  let space = name.indexOf(' ')
  let abbrev = name[0] + '.' + name[space + 1] + '.'
  return abbrev.toString().toUpperCase()
}


// Refactored to use less code

function abbrevName(name){
  return (name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.')) + "."
}


// Refactored into an arrow function

const abbrevName = name => (name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.')) + "."
