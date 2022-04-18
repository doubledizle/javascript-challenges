// Write a function takes a name string and returns 'Hello' plus the name in proper American naming case (eg: John) regardless of input casing, and return 'Hello World' if no name is passed

function hello(name) {
  if (name)
    return `Hello ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}`
  return 'Hello World'
}


// Refactored from an anonymous function

const hello = name => name ? `Hello ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}` : 'Hello World'
