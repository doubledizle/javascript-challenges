// Write a function that takes a string of space separated integers and returns the highest and the lowest values to a new string. eg: '1 -5 21 7 3' === '21 -5'

function highAndLow(numbers){
  let newArr = numbers.split(' ').sort((a,b) => a-b)
  return `${newArr[newArr.length-1]} ${newArr[0]}`
}