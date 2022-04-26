// Write a function that takes an array and returns the next smallest id available to use

function nextId(ids){
  let i = 0;
  while (ids.includes(i))
    i++
  return i
}
