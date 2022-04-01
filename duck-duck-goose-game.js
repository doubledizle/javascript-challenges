// Write a duck duck goose game: Take an array and an integer, and return the players name that's in the correct position
// Must be able to go through array multiple times (like that one kid always did)

function duckDuckGoose(players, goose) {
  let num = 0
  for (var i=0; i<goose ; i++) {
    num = players[i % players.length]
  }
  return num.name
}


// Refactored into a simpler function

function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name
}


// Refactored into an anonymous function

const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name
