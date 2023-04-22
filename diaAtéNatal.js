function calculaDiasAteAoNatal(dia, mes){
    const mesesComTrinta = [4, 6, 9, 11];
const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let somaDosDias = 0;
let diaDeNatal = 359;
let diasAteAoNatal = 0;

if (dia < 1 ||  dia > 31) {
  return "Por favor introduza um dia entre 1 e 31.";
} else if (mes < 1 ||  mes > 12) {
  return "Por favor introduza um mês entre 1 e 12.";
} else if (mesesComTrinta.includes(mes) && dia > 30) {
  return "Por favor introduza um dia entre 1 e 30.";
} else if (mes === 2 && dia > 28) {
  return "Por favor introduza um dia entre 1 e 28.";
}

for (let i = 0; i < mes; i++) {
  if (i < mes - 1) {
    somaDosDias += diasPorMes[i];
  } else {
    somaDosDias += dia;
  }
}

if (somaDosDias < diaDeNatal) {
  diasAteAoNatal = diaDeNatal - somaDosDias;
  return `Faltam ${diasAteAoNatal} dias até ao Natal.`;
} else if (somaDosDias > diaDeNatal) {
  return `Faltam ${365 - somaDosDias + diaDeNatal} dias até ao Natal.`;
} else {
  return "Hoje é Natal!";
}
}