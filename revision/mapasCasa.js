function copiaMatrizes(array) {
    const vogais = ["a", "e", "i", "o", "u"];

    return array.map((linha) => {
        return linha.map((letra) => {
            return vogais.includes(letra) ? letra.toUpperCase() : letra;
        });
    });
}

const matriz = [
    ["a", "x", "e", "p", "o"],
    ["b", "q", "z", "b", "s"],
    ["r", "t", "h", "r", "t"],
    ["i", "k", "j", "k", "c"],
    ["n", "l", "v", "l", "v"],
];

console.log(copiaMatrizes(matriz));
