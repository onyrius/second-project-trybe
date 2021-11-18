// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if ((a) && (b)) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
}
// Desafio 3
function splitSentence(umaString) {
  // seu código aqui
  let umaArray = umaString.split('');
  return umaArray
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
function footballPoints(wins, ties) {
  // seu código aqui
  let resultFootball = 0;
  resultFootball = (wins * 3) + ties;
  return resultFootball;
}

// Desafio 6
function highestCount(numberList) {
  // seu código aqui
  let count = 0
  for (let index = 0; index < numberList.length; index +=1) {
  if ((numberList[index]) === (Math.max.apply(null, numberList))) {
    count = count + 1
  }
  
  }
  return count 
}
  /**Source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max?retiredLocale=it */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((cat1 - mouse) > (cat2 - mouse)) {
    return "cat2";
  } else if ( (cat1 - mouse) < (cat2 - mouse) && (cat1 !=0)) {
    return "cat1";
  }else if ( ( mouse - cat1) === (cat2 - mouse) ){
  return "os gatos trombam e o rato foge"
    }
 }


// Desafio 8
function fizzBuzz(numbersFizzBuzz) {
  // seu código aqui
  let resultFizzBuzz = []
  
  for ( let index = 0; index < numbersFizzBuzz.length; index += 1) {

  if ((numbersFizzBuzz[index] %3 ===0) && (numbersFizzBuzz[index]%5===0)) {
     resultFizzBuzz.push("fizzBuzz");
  } else if (numbersFizzBuzz[index]%3 ===0) {
    resultFizzBuzz.push ("fizz");
  }else if (numbersFizzBuzz[index]%5===0) {
    resultFizzBuzz.push ("buzz") ;
    } else{
     resultFizzBuzz.push ("bug!")
    }
  }
   return resultFizzBuzz;
  }
  
// Desafio 9
function encode(code) {
// seu código aqui
let codified = ""
codified = codified + code.replace(/a/gi, 1).replace(/e/gi,2).replace(/i/gi,3).replace(/o/gi,4).replace(/u/gi,5); 
  
return codified
}

/**Source https://stackoverflow.com/questions/57606351/just-change-the-vowel-to-the-next-letter-in-javascript **/
 /**Source https://www.codegrepper.com/code-examples/javascript/javascript+replace+function+multiple **/
 /**Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace */


function decode(code) {
  // seu código aqui
  let decodified = ""
decodified = decodified + code.replace(/1/gi, "a").replace(/2/gi,"e").replace(/3/gi,"i").replace(/4/gi,"o").replace(/5/gi,"u"); 
  
return decodified
};



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
