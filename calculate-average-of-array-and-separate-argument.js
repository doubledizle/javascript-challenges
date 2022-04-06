// Write a function that takes an array of integers and and checks to see if the average of the array numbers plus a separate argument is less than the argument integer

const betterThanAverage = (arr, b) => ((arr.reduce((acc,c) => acc + c, 0) + b) / (arr.length + 1)) < b ? true : false

