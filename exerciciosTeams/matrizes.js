//Cria uma função copia matriz que recebe uma matriz de letras como argumento e retorna uma matriz semelhante com as letras vogais em maiúscula.

const matriz = [
  ["a", "x", "e", "p", "o"],
  ["b", "q", "z", "b", "s"],
  ["r", "t", "h", "r", "t"],
  ["i", "k", "j", "k", "c"],
  ["n", "l", "v", "l", "v"],
];

function vogaisEmMaiusculas(matriz) {
  let vogais = ["a", "e", "i", "o", "u"];

  return matriz.map((linha) =>
    linha.map((letra) => vogais.includes(letra) ? letra.toUpperCase() : letra)
  );
}

console.log(vogaisEmMaiusculas(matriz))


for