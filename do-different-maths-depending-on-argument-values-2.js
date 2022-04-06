// Write a function that takes two arguments and multiplies them together if they are equal, and doubles each of them and adds the sum if they are not equal.

function areaOrPerimeter(l , w) {
  if (l === w) {
    return l * w
  }else {
    return l * 2 + w * 2
  }
};


// Refactored into an anonymous function

const areaOrPerimeter = (l , w) => l === w ? l * w : l * 2 + w * 2