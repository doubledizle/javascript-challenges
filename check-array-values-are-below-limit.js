// Write a function that takes an array and checks each element to make sure it's less than or equal to the supplied limit number, no loops are allowed

const smallEnough = (array, limit) => Math.max(...array) <= limit ? true : false
