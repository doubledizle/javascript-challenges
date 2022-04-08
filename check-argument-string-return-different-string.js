// Write a function that takes a string and returns a different string based on the value

function updateLight(current) {
  if (current === 'green')
    return 'yellow'
  if (current === 'yellow')
    return 'red'
  if (current === 'red')
    return 'green'
}

// Refactored into an anonymous function

const updateLight = current => current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green'