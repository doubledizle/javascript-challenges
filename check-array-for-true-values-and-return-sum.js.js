function countSheeps(arrayOfSheep) {
  let totalSheep = 0
  let length = arrayOfSheep.length
  for(i = 0; i < length; i++){
    if(arrayOfSheep[i] === true){
      totalSheep++
    }
  }
  return totalSheep
}

// Simplified

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
