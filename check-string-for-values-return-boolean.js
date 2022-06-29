// Write a function that takes a string and checks to see if a value is contained within it, case insensitive

const validateHello = (g = g.toLowerCase()) =>
  g.toLowerCase().includes('hello') ? true :
  g.toLowerCase().includes('ciao') ? true :
  g.toLowerCase().includes('salut') ? true :
  g.toLowerCase().includes('hallo') ? true :
  g.toLowerCase().includes('hola') ? true :
  g.toLowerCase().includes('ahoj') ? true :
  g.toLowerCase().includes('czesc') ? true : false
  