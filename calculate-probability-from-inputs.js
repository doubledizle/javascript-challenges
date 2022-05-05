// Write a function that calculates the probablity of pulling an item based on arguments passed

function guessColor(blueStart, redStart, bluePulled, redPulled) {
  let blueLeft = blueStart - bluePulled
  let redLeft = redStart - redPulled
  return `Chance of pulling blue: ${(blueLeft / (blueLeft + redLeft)*100)}%. Chance of pulling red: ${(redLeft / (redLeft + blueLeft)*100)}%`
}