/* Write a functino that takes a cuboids volume and single side length, and returns true if the cuboid can have equal sides, false otherwise */

let cubeChecker = function(volume, side){
  return volume <= 0 || side <= 0 ? false : volume === side**3
}
