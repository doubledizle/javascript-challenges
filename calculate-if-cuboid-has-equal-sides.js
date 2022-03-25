/* Write a functino that takes a cuboids volume and single side length, and returns true if the cuboid can have equal sides, false otherwise */

function cubeChecker(vol, side){
  return volume <= 0 || side <= 0 ? false : vol === side**3
}


// Refactored into an arrow function

const cubeChecker = (vol, side) => volume <= 0 || side <= 0 ? false : vol === side**3