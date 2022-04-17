// Write a function that checks a string for letters and returns a string with different responses if true/false

const nameCheck = name => name[0].toLowerCase() === 'r' ? `${name} includes R`: `${name} does not include R`
