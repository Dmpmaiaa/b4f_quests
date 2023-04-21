/* let myStringArray = ['Diogo', 'Andrezza']

function reverseStringsInArray(array){
    if(array.length === 0){
        return[]
    }
    return [...reverseStringsInArray(array.slice(1)), array[0]].join('')
}

console.log(reverseStringsInArray(myStringArray));



function mapInvertedStrings(array) {
    
    return array.map((word) => reverseStringsInArray(word).join(''));
}

console.log(mapInvertedStrings(myStringArray)); */

// function stringsToLength(array) {
//     return array.map((el) => el.length);
// }

// console.log(stringsToLength(myStringArray));

// function sumOfTheOddPairs(array) {
//     return array
//         .filter((el) => el % 2 === 0)
//         .map((el) => el ** 2)
//         .reduce((acc, c) => acc + c);
// }

// console.log(sumOfTheOddPairs(myNumbersArray));

// function returnEven(array) {
//     return array.every((el) => el % 2 === 0);
// }

// console.log(returnEven(myNumbersArray));

// function returnOneEven(array) {
//     return array.some((el) => el % 2 === 0);
// }

// console.log(returnOneEven(myNumbersArray));

//onsole.log(occurencesMap(myNumbersArray));
// Cria uma função que mapeia cada elemento de um array de strings para o seu comprimento.

// Cria uma função que filtra os elementos pares, mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatório dos elementos resultantes.

// Cria uma função que mapeia cada elemento de um array de strings para a string invertida.A inversão de cada string deve ser implementada utilizando uma função recursiva.

// Cria uma função que retorna true se todos os elementos do array forem pares.

// Cria uma função que retorna true se pelo menos um dos elementos do array for par.


// Cria uma função que mapeia cada elemento de um array de objetos com as propriedades name e birthday para um objeto que além destas propriedades, tem a propriedade age.
