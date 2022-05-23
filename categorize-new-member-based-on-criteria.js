/* Write a function that takes an array of 2 number pair arrays and categorizes new members based on criteria:
Age > 54 and handicap > 7 = 'Senior', else set them to 'Open'
*/

function openOrSenior(data) {
  let arr = []
  for (let i=0; i<data.length; i++){
    if (data[i][0] > 54 && data[i][1] > 7)
      arr.push('Senior')
    else
      arr.push('Open')
  }
  return arr
}


// Refactored using Map

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
}
