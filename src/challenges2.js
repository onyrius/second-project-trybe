// Desafio 10
function techList(techno, name) {
// seu código aqui
  let techOrder = techno.sort()
  objectTech = {}
  objectTechList =[]
  if (techno.length  === 0){
  return "Vazio!"
  }
 for ( let tech in techOrder) {
   objectTech = {
     tech: techno[tech],
     name
     };
   objectTechList.push(objectTech)
 }
 return (objectTechList)
  
 
  }
;
  // console.log(techList(["java", "css", 'aaaa'], "Suelen"))
  // console.log(techList("Suelen"))

  /**Source https://www.youtube.com/watch?v=R8rmfD9Y5-c&ab_channel=WebDevSimplified */;
  /**Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=it */



// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
  // let counts = {};
  
  //  if (numberPhone.length != 11)  {
  //   return ("Array com tamanho incorreto.")  
  //   }
  //   for (i=0; i<numberPhone.length; i+=1) {
  //  if (numberPhone[i]<0 ||numberPhone[i] >9) 
  //   return "não é possível gerar um número de telefone com esses valores" 
  //  }
  //   numberPhone.forEach((number) => {
  //     counts[number] = (counts[number] || 0) + 1;
      
  //   }) 
  //   console.log((counts[number]))
   
  //       for(let n in counts){
  //         if (counts [n]>=3) {
  //           return ("não é possível gerar um número de telefone com esses valores")
  //         }else {
  //       return "(" + numberPhone[0] + numberPhone[1] + ") " + numberPhone[2]+ numberPhone[3]+ numberPhone[4]+ numberPhone[5] + numberPhone[6] + "-" + numberPhone[7]+ numberPhone[8] + numberPhone[9] + numberPhone[10]

  //     }
  //   }
}
  
// console.log(generatePhoneNumber([1,1,2,2,2,2,2,3,6,4,6]));

    
         

      






/**Source https://www.youtube.com/watch?v=Qwp_ECqo9-E&ab_channel=Johnny */
/**Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size */
/**Souce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set?retiredLocale=it */
/**Source https://www.youtube.com/watch?v=1LFfp8bTpvc&ab_channel=AllThingsJavaScript%2CLLC */
/**https://www.youtube.com/watch?v=MLNmrzGQYdU&ab_channel=AllThingsJavaScript%2CLLC */
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
