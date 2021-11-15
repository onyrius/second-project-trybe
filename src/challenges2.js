// Desafio 10
function techList(tech, name) {
// seu código aqui
  
  
  }
  
  

// Desafio 11
function generatePhoneNumber(numberPhone) {

}

/**Source https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3 */
/**https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3 */

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
 let triangle;
  if (( ((lineA < Math.abs((lineB - lineC))) || (lineB < Math.abs((lineA - lineC))) || (lineC < Math.abs((lineB - lineA)) )))){
 return triangle = false
} else if  ((lineA < (lineB+lineC)) && Math.abs((lineA - lineB - lineC))) {
  return true
} else {
  return false
}
}


// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numbers = /\d+/g;
  let stringList = string.match(numbers);
 let numbersList = 0
  for (let i=0; i<stringList.length; i+=1) {
    numbersList = numbersList + parseInt(+stringList[i])
 }
 if (numbersList === 1) {
   return numbersList + " copo de água"
 }
 else{
  return numbersList + " copos de água"
} 
}
/**Source https://www.youtube.com/watch?v=rACU7OeATI0&ab_channel=AllThingsJavaScript%2CLLC */
/**Source https://www.youtube.com/watch?v=U62pvnEqEQA&ab_channel=AllThingsJavaScript%2CLLC */

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
