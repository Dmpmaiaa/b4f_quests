function tempoEmPalavras(h, m) {
  const horas = [
    "meia noite",
    "uma",
    "duas",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "meio dia",
  ];

  const mins = [
    "em ponto",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "doze",
    "treze",
    "catorze",
    "um quarto",
    "dezasseis",
    "dezassete",
    "dezoito",
    "dezanove",
    "vinte",
    "vinte e um",
    "vinte e dois",
    "vinte e três",
    "vinte e quatro",
    "vinte e cinco",
    "vinte e seis",
    "vinte e sete",
    "vinte e oito",
    "vinte e nove",
    "meia",
  ];

  let horaPorExtenso;
  let minsPorExtenso;

  if (h < 24 && m < 60) {
    if (h === 23) {
      m <= 30
        ? (horaPorExtenso = horas[h - horas.length + 1])
        : (horaPorExtenso = horas.reverse()[h + 1 - horas.length + 1]);
    } else if (h > 12) {
      m <= 30
        ? (horaPorExtenso = horas[h - horas.length + 1])
        : (horaPorExtenso = horas[h + 1 - horas.length + 1]);
    } else if (h === 12) {
      m <= 30
        ? (horaPorExtenso = horas[h])
        : (horaPorExtenso = horas[h + 1 - horas.length + 1]);
    } else {
      m <= 30 ? (horaPorExtenso = horas[h]) : (horaPorExtenso = horas[h + 1]);
    }

    if (m === 0) {
      minsPorExtenso = mins[m];
      return `${horaPorExtenso} ${minsPorExtenso}`;
    } else if (m > 0 && m <= 30) {
      minsPorExtenso = mins[m];
      return `${horaPorExtenso} e ${minsPorExtenso}`;
    } else if (m > 30) {
      minsPorExtenso = mins.reverse()[m - mins.length + 1];

      if (horaPorExtenso === "uma" || horaPorExtenso === "meia noite") {
        return `${minsPorExtenso} para a ${horaPorExtenso}`;
      } else if (horaPorExtenso === "meio dia") {
        return `${minsPorExtenso} para o ${horaPorExtenso}`;
      } else {
        return `${minsPorExtenso} para as ${horaPorExtenso}`;
      }
    }
  } else {
    return "Inserir uma hora entre 0 e 23 e minutos entre 0 e 59";
  }
}
