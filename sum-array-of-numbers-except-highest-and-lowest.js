function sumArray(array) {
  let total = 0
  if (array === null || array === []) {
    total = 0
  }else {
    let sorted = array.sort((a,b) => a-b)
    for (i = 1; i < sorted.length - 1; i++) {
      total += sorted[i]
    }
  }  
  return total
}
