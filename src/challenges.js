// Desafio 1 
function compareTrue( a,b ) {
  // seu código aqui
  if ((a) && (b)) {
    return true
  } else {
    return false
  }
} 
  



// Desafio 2
function calcArea(base , height) {
  // seu código aqui
  
  let resultado = (base * height)/2; 
  return resultado
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  
let array = string.split(" ")
 
  return array
} /** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */

// Desafio 4
function concatName(arrayName) {
  // seu código aqui
 let firstName = arrayName [0]
 let lastName = arrayName [arrayName.length-1]
 let stringName = lastName +", " + firstName    
     return stringName
 }


// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
