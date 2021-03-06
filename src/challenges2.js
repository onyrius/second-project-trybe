// Desafio 10
function techList(technologies, name) {
  let technologiesOrdem = technologies.sort();
  let objectTechList = [];
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  for (let technology of technologiesOrdem) {
    let tech = technology;
    objectTechList.push({ tech: technology, name });
  }
  return objectTechList;
}
/** Source  Com auxílio de Tabata Souto: https://github.com/TabataSouto
          E Byanca : https://github.com/byancaknorst */
/** Source https://www.youtube.com/watch?v=R8rmfD9Y5-c&ab_channel=WebDevSimplified */
/** Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=it */

// Desafio 11

function generatePhoneNumber(numberPhone) {
  let impossible = 'não é possível gerar um número de telefone com esses valores';
  let guardaRepetidos = {};
  guardaRepetidos = numberPhone.reduce(function (numeros, vezes) {
    if (!numeros[vezes]) {
      numeros[vezes] = 1;
    } else {
      numeros[vezes] += numeros[vezes];
    }
    return numeros;
  }, {});
  if (numberPhone.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  for (let verify in guardaRepetidos) {
    if (guardaRepetidos[verify] >= 3) {
      return impossible;
    }
  }
  for (let i = 0; i < numberPhone.length; i += 1) {
    if ((numberPhone[i] < 0) || (numberPhone[i] > 9)) {
      return impossible;
    } if (i === 10) {
      return `(${numberPhone[0]}${numberPhone[1]}) ${numberPhone[2]}${numberPhone[3]}${numberPhone[4]}${numberPhone[5]}${numberPhone[6]}-${numberPhone[7]}${numberPhone[8]}${numberPhone[9]}${numberPhone[10]}`;
    }
  }
}
/** Source Ajuda do amigo Leo!!!!  https://github.com/agsleonardo */
/** Source https://www.youtube.com/watch?v=Qwp_ECqo9-E&ab_channel=Johnny */
/** Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size */
/** Souce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set?retiredLocale=it */
/** Source https://www.youtube.com/watch?v=1LFfp8bTpvc&ab_channel=AllThingsJavaScript%2CLLC */
/** https://www.youtube.com/watch?v=MLNmrzGQYdU&ab_channel=AllThingsJavaScript%2CLLC */
/** Source https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3 */
/** https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3 */

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < Math.abs(lineB - lineC))) {
    return false;
  } if ((lineA < (lineB + lineC)) && Math.abs((lineA - lineB - lineC))) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numbers = /\d+/g;
  let stringList = string.match(numbers);
  let numbersList = 0;
  for (let i = 0; i < stringList.length; i += 1) {
    numbersList += parseInt(+stringList[i], 10);
  }
  if (numbersList === 1) {
    return `${numbersList} copo de água`;
  }
  return `${numbersList} copos de água`;
}
/** Source https://www.youtube.com/watch?v=rACU7OeATI0&ab_channel=AllThingsJavaScript%2CLLC */
/** Source https://www.youtube.com/watch?v=U62pvnEqEQA&ab_channel=AllThingsJavaScript%2CLLC */

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
