const matriz = [
    ["", "p", "", "", ""],
    ["", "p", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

const inicio = {
    line: 0,
    column: 2,
};

const final = {
    line: 0,
    column: 4,
};

function encontraIlhas(matriz) {

    for (let linha = 0; linha < matriz.length; linha++) {
        for (let coluna = 0; coluna < matriz.length; coluna++) {
            if (matriz[linha][coluna] === 0) {
                countZero += visitarIlhas(
                    linha,
                    coluna,
                    matriz,
                    casasVisitadasZero,
                    1
                );
            } else {
                countOne += visitarIlhas(
                    linha,
                    coluna,
                    matriz,
                    casasVisitadasUm,
                    0
                );
            }
        }
    }
    return [countZero, countOne];
}

function visitarIlhas(linha, coluna, matriz, casasVisitadas, valor) {
    const pos = [linha, coluna].join("");

    if (
        linha < 0 ||
        linha > matriz.length - 1 ||
        coluna < 0 ||
        coluna > matriz.length - 1 ||
        matriz[linha][coluna] === valor ||
        casasVisitadas.includes(pos)
    ) {
        return 0;
    }

    casasVisitadas.push(pos);

    visitarIlhas(linha + 1, coluna, matriz, casasVisitadas, valor);
    visitarIlhas(linha - 1, coluna, matriz, casasVisitadas, valor);
    visitarIlhas(linha, coluna + 1, matriz, casasVisitadas, valor);
    visitarIlhas(linha, coluna - 1, matriz, casasVisitadas, valor);

    return 1;
}

console.log(encontraIlhas(arquipelago));
