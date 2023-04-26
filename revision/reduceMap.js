// Cria uma função que reduz um array de números para um Map que tem como chaves os valores do array e como valores o número de ocorrências da chave. (mapa de ocOrrências)

let myNumbersArray = [4, 4, 6, 7, 8];

function occurencesMap(array) {
  return array.reduce((arrayDeElementos, elemento) => {
    return arrayDeElementos.has(elemento)
      ? new Map([
          ...arrayDeElementos,
          [elemento, arrayDeElementos.get(elemento) + 1],
        ])
      : new Map([...arrayDeElementos, [elemento, 1]]);
  }, new Map([]));
}

console.log(occurencesMap(myNumbersArray));
























/* 
function occurencesMap(array) {
  return array.reduce(
    (mapaDeOcorrrencias, elemento) => [
      mapaDeOcorrrencias.get(elemento) ? mapaDeOcorrrencias.get(elemento) : 0 ,
      mapaDeOcorrrencias.set(elemento + 1)  
    ],
    new Map([])
  );
}
 */
