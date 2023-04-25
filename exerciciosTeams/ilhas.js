let arquipelago = [
  [0, 0, 1, 1],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 0],
]; // 3, 3

let arquipelago2 = [
  [1, 0, 1, 1],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
]; // 2 .1


function encontraIlhas(matriz) {
  let contarZeros = 0;  // nr de ilhas de zeros
  let contarUns = 0;  // nr de ilhas de uns

  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz.length; coluna++) {
      if (matriz[linha][coluna] === 1) {     // se o elemento atual for 1
        contarUns += verificaUm(linha, coluna, matriz); // chama funçao recursiva para verificar ilhas de 1s
      } else if (matriz[linha][coluna] === 0) {
        //contarZeros += verificaZero(linha, coluna, matriz);
      }
    }
  }

  return [contarZeros, contarUns];
}

function verificaUm(linha, coluna, matriz) {
  let novaMatriz = [...matriz];

  if (
    linha < 0 ||
    linha > matriz.length - 1 ||
    coluna < 0 ||
    coluna > matriz.length - 1 ||
    novaMatriz[linha][coluna] === 0
  ) {
    return;    // caso trivial da recursao --- verifica se o elemento atual é invalido ou se é 0, o que significa que ja nao é a mesma ilha, 
  }

  novaMatriz[linha][coluna] = 0; // pinta o elemento atual como 0 para sinalizar como elemento já visitado

  verificaUm(linha + 1, coluna, novaMatriz); // chama funçao para verificar numero de baixo
  verificaUm(linha - 1, coluna, novaMatriz); // numero de cima
  verificaUm(linha, coluna + 1, novaMatriz); // numero da direita
  verificaUm(linha, coluna - 1, novaMatriz); // numero da esquerda

  return 1;
}


// faz exatamente o mesmo mas para os zeros


function verificaZero(linha, coluna, matriz) {
  let novaMatriz = [...matriz];
  if (
    linha < 0 ||
    linha > matriz.length - 1 ||
    coluna < 0 ||
    coluna > matriz.length - 1 ||
    novaMatriz[linha][coluna] === 1
  ) {
    return;
  }

  novaMatriz[linha][coluna] = 1;

  verificaZero(linha + 1, coluna, novaMatriz);
  verificaZero(linha - 1, coluna, novaMatriz);
  verificaZero(linha, coluna + 1, novaMatriz);
  verificaZero(linha, coluna - 1, novaMatriz);

  return 1;
}

console.log(encontraIlhas(arquipelago));
console.log(encontraIlhas(arquipelago2));
