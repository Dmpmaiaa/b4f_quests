const aMinhaMatriz = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

function diferencaEntreDiagonais(matrizquadrada) {
  let diagonalPrincipal = 0;
  let diagonalSecundaria = 0;

  for (let linha = 0; linha < matrizquadrada.length; linha++) {
    diagonalPrincipal += matrizquadrada[linha][linha];
    diagonalSecundaria +=matrizquadrada[linha][matrizquadrada.length - 1 - linha];

  }

  return diagonalPrincipal - diagonalSecundaria;
}

console.log(diferencaEntreDiagonais(aMinhaMatriz));
