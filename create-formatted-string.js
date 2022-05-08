// Write a function that takes a string and returns a diffrent string that duplicates each letter +1 each time

function accum(s) {
	let newArr = s.split('')
  for (i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].toUpperCase() + newArr[i].toLowerCase().repeat(i)
  }
  return newArr.join('-')
}
