function trimestresDoAno(t) {
  const trimestres = {
    1: "Janeiro, Fevereiro, Março",
    2: "Abril, Maio, Junho",
    3: "Julho, Agosto, Setembro",
    4: "Outubro, Novembro, Dezembro",
  };

  return trimestres[2]; // : "Número inválido. Por favor insira um número entre 1 e 4."
}

console.log(trimestresDoAno(2));
