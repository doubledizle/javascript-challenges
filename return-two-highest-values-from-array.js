// Write a function that takes an array and returns the two highest number values from it

const twoHighest = arr => [...new Set(arr)].sort((a,z) => z - a).slice(0,2)
