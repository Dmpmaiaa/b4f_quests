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

  for (let colunas = 0; colunas < 3; colunas++) {
    for (let i = 0; i < 3; i++) {
      if (
        novoJogo.tabuleiro[i][colunas] === " " &&
        i === linha &&
        colunas === coluna
      ) {
        novoJogo.tabuleiro[i][colunas] = jogador;
      }
    }
  }

  return novoJogo;
}

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
  }

  counterX = 0;
  counterO = 0;

  for (let coluna = 0; coluna < 3; coluna++) {
    if (
      novoJogo.tabuleiro[linha][coluna] === "X" ||
      novoJogo.tabuleiro[coluna][linha] === "X" ||
      novoJogo.tabuleiro[coluna][novoJogo.tabuleiro.length - 1 - linha] ===
        "X" ||
      novoJogo.tabuleiro[novoJogo.tabuleiro.length - 1 - coluna][coluna] === "X"
    ) {
      counterX++;
    } else if (
      novoJogo.tabuleiro[linha][coluna] === "O" ||
      novoJogo.tabuleiro[coluna][linha] === "O" ||
      novoJogo.tabuleiro[coluna][novoJogo.tabuleiro.length - 1 - linha] ===
        "O" ||
      novoJogo.tabuleiro[novoJogo.tabuleiro.length - 1 - coluna][coluna] === "O"
    ) {
      counterO++;
    }
  }
}

function verificarFimDoJogo(jogo) {
  return verificarVencedor(jogo) === "X" ||
    (verificarVencedor(jogo) === "O" &&
      obterJogadasPossiveis(jogo).length === 0)
    ? true
    : false;
}

console.log("Verificar vencedor: " + verificarVencedor(jogo));
console.log(obterJogadasPossiveis(jogo));
console.log(verificarFimDoJogo(jogo));
