// Write a function that takes a string rgb color code and converts it to hexidecimal

function colorOf(r,g,b){
  let hexR = r.toString(16)
  let hexG = g.toString(16)
  let hexB = b.toString(16)
  return `#${hexR.length < 2 ? 0 + hexR : hexR}${hexG.length < 2 ? 0 + hexG : hexG}${hexB.length < 2 ? 0 + hexB : hexB}`
}
