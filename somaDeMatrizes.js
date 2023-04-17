let matriz = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
];


function somaDasDiagonais(matriz){

    let diagonalA = 0
    let diagonalB = 0
    diagonalA = 0 + 4 + 8
    diagonalB = 2 + 4 + 6

    for(let i = 0; i < matriz.length; i++){
        diagonalA += matriz[i][i]
        diagonalB += matriz[i][matriz.length - 1 - i]
    }

    console.table(matriz)
    
}

console.log(somaDasDiagonais(matriz))

 
function horizontaisEVerticais(matriz) {
    let linhas = "";

    for (let linha = 0; linha < matriz.length; linha++) {

        for (let coluna = 0; coluna < matriz.length; coluna++){

            console.log(matriz[coluna][linha]);

        }
    }
}

console.log(horizontaisEVerticais(matriz));



