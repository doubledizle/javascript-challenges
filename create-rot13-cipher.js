// Write a function that takes a string as a message and returns the message encoded with a Rot13 cipher

function rot13(message){
  const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  function encrypt(char) {
    if (alphabetLower.includes(char)) {
      return alphabetLower[(alphabetLower.indexOf(char) + 13) % 26]
    }
    else if (alphabetUpper.includes(char)) {
      return alphabetUpper[(alphabetUpper.indexOf(char) + 13) % 26]
    }
    else {
      return char
    }
  }
  
  return message.split('').map(char => encrypt(char)).join('')
}

