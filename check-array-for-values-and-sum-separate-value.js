// Write a function that takes game scores and calculates championship points based on those scores

function points(games) {
  let totalPoints = 0
  games.forEach(elem => {
    if (elem[0] > elem[2])
      totalPoints += 3
    if (elem[0] === elem[2])
      totalPoints += 1
  })
  return totalPoints
}


// Refactored into an anonymous function using the Reduce method

const points = games => games.reduce((sum, [x, _, y]) => sum + (x > y ? 3 : x == y), 0)