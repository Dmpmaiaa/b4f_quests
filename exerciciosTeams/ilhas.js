/* let arquipelago = [
  [0, 0, 1, 1],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 0],
]; // 3, 3


function encontraIlhas(matriz) {
  let contarZeros = 0; // nr de ilhas de zeros
  let contarUns = 0; // nr de ilhas de uns

  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz.length; coluna++) {
      if (matriz[linha][coluna] === 0) {
        contarZeros += visitarIlhas(linha, coluna, matriz); // chama funçao recursiva para verificar ilhas de 1s

        //verificaValor(linha, coluna, matriz, 1); // chama funçao recursiva para verificar ilhas de 1s
      }
    }

    return [contarZeros, contarUns];
  }
}

function visitarIlhas(linha, coluna, matriz) {
  
  let casasVisitadas = [[0,0], [0,1], ]
  
  if (
    linha < 0 ||
    linha > matriz.length - 1 ||
    coluna < 0 ||
    coluna > matriz.length - 1 ||
    matriz[linha][coluna] === 1 ||
    ca
    
  ) {
    console.log(casasVisitadas)
    return;
  }

  matriz[linha][coluna] = 1;
  casasVisitadas.push([linha, coluna])

  visitarIlhas(linha + 1, coluna, matriz); // chama funçao para verificar numero de baixo
  visitarIlhas(linha - 1, coluna, matriz); // numero de cima
  visitarIlhas(linha, coluna + 1, matriz); // numero da direita
  visitarIlhas(linha, coluna - 1, matriz); // numero da esquerda

  return casasVisitadas;
}

console.log(encontraIlhas(arquipelago));
 */
// faz exatamente o mesmo mas para os zeros

// function verificaZero(linha, coluna, matriz) {
//     let matriz = [...matriz];
//     if (
//         linha < 0 ||
//         linha > matriz.length - 1 ||
//         coluna < 0 ||
//         coluna > matriz.length - 1 ||
//         matriz[linha][coluna] === 1
//     ) {
//         return;
//     }

//     matriz[linha][coluna] = 1;

//     verificaZero(linha + 1, coluna, matriz);
//     verificaZero(linha - 1, coluna, matriz);
//     verificaZero(linha, coluna + 1, matriz);
//     verificaZero(linha, coluna - 1, matriz);

//     return 1;
// }

// console.log(encontraIlhas(arquipelago));
// // console.log(encontraIlhas(arquipelago2));
// // console.log(encontraIlhas(arquipelago3));

// // return de um dos numero, está ok ! quando tento contar os dois, return com resultado errado

let a = [
  [0, 2],
  [1, 1],
  [1, 3],
  [0, 3]
];


let pos = "04";

let casasVisitadas = ['01', '02', '12']



if(casasVisitadas.includes(pos)){
  console.log('ja fui')
}else{
  casasVisitadas.push(pos)
}

console.log(casasVisitadas)