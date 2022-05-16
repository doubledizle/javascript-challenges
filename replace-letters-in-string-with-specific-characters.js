// Write a function that takes a string of a DNA strand and return its compliementary strand
// This will ultimately mean swapping letters: A for T, T for A, C for G, and G for C

function DNAStrand(dna){
  let arr = dna.split('')
  arr.forEach((e, i) => {
    switch(e) {
      case 'A':
        arr[i] = 'T'
        break
      case 'T':
        arr[i] = 'A'
        break
      case 'C':
        arr[i] = 'G'
        break
      case 'G':
        arr[i] = 'C'
    }
  })
  return arr.join('')
}
