// Write a function that takes an array of team vs. team names, and an array of scores, and returns a string displaying who won, or if it was a tie.

function SuperBowl(teams, scores){
  for (i = 0; i < teams.length; i++) {
    if (scores[0] > scores[1])
      return `In the ${teams[0]} vs. ${teams[1]} game, ${teams[0]} won.`
    if (scores[0] < scores[1])
      return `In the ${teams[0]} vs. ${teams[1]} game, ${teams[1]} won.` 
    return `In the ${teams[0]} vs. ${teams[1]} game, it ended in a tie.`
  }
}
