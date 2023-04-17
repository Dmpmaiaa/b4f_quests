const jogo = {
    tabuleiro: [
        [" ", "X", "X"],
        ["X", " ", "X"],
        ["X", " ", " "],
    ],
};

console.table(jogo.tabuleiro);

// ADICIONAR JOGADA TENDO EM CONTA O TABULEIRO

 function adicionarJogada(jogo, jogador, linha, coluna) {
    const novoJogo = JSON.parse(JSON.stringify(jogo));

    if (novoJogo.tabuleiro[linha][coluna] === " ") {
        novoJogo.tabuleiro[linha][coluna] = jogador;
    }

      console.table(novoJogo.tabuleiro);
} 

//console.log(adicionarJogada(jogo, 'X', 0, ))
// VERIFICAR SE EXISTEM JOGADAS P

function obterJogadasPossiveis(jogo) {
    const novoJogo = JSON.parse(JSON.stringify(jogo));
    let jogadasPossiveis = [];

    for (let i = 0; i < 3; i++) {
        for (let colunas = 0; colunas < 3; colunas++) {
            if (novoJogo.tabuleiro[i][colunas] === " ") {
                jogadasPossiveis.push({ linha: i, coluna: colunas });
            }
        }
    }
    return jogadasPossiveis;
}

console.log(obterJogadasPossiveis(jogo))

let counterX;
let counterO;


function verificarVencedor(jogo) {
    const novoJogo = JSON.parse(JSON.stringify(jogo));

    for (let linha = 0; linha < 3; linha++) {
        if (counterX === 3) {
            return "X";
        } else if (counterO === 3) {
            return "O";
        }
    

    counterX = "";
    counterO = "";

    for (let coluna = 0; coluna < 3; coluna++) {
        if (
            novoJogo.tabuleiro[linha][coluna] === "X" ||
            novoJogo.tabuleiro[coluna][linha] === "X" ||
            novoJogo.tabuleiro[coluna][novoJogo.tabuleiro.length - 1 - linha] === "X" ||
            novoJogo.tabuleiro[novoJogo.tabuleiro.length - 1 - coluna][coluna] === "X"
        ) {
            counterX+= 'X';


        } else if (
            novoJogo.tabuleiro[linha][coluna] === "O" ||
            novoJogo.tabuleiro[coluna][linha] === "O" ||
            novoJogo.tabuleiro[coluna][
                novoJogo.tabuleiro.length - 1 - linha
            ] === "O" ||
            novoJogo.tabuleiro[novoJogo.tabuleiro.length - 1 - coluna][
                coluna
            ] === "O"
        ) {
            counterO++;
        }
    }
}
}
console.log(verificarVencedor(jogo));





function verificarFimDoJogo(jogo) {

    return verificarVencedor(jogo) !== false || obterJogadasPossiveis(jogo).length === 0 

}

console.log("Verificar vencedor: " + verificarVencedor(jogo));
console.log(obterJogadasPossiveis(jogo));
console.log(verificarFimDoJogo(jogo));

