/* function tempoEmPalavras(h, m) {
    const hora  = ['meia-noite', 'uma', 'duas', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'meio-dia', 'uma', 'duas', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove','dez','onze'];
    const min = ['zero','um', 'dois', 'três', 'quatro', 'cinco','seis', 'sete','oito','nove', 'dez', 'onze', 'doze','treze', 'catorze', 'quinze','dezasseis', 'dezoito', 'dezanove','vinte', 'vinte e um', 'vinte e dois','vinte e três', 'vinte e quatro', 'vinte e cinco','vinte e seis', 'vinte e sete', 'vinte e oito', 'vinte e nove', 'trinta'];
    const meia = 'meia';
    let horaStr='';

    if ((h == 0 || h == 24) && m == 0) {
        horaStr = 'meia-noite em ponto';
    } else if ((h == 12 || h == 0) && m == 0) {
        horaStr = 'meio-dia em ponto';
    } else if (h == 12 && m > 30) {
        horaStr = min[60-m] + ' para o meio-dia';
    } else if ((h == 0 || h == 24) && m > 30) {
        horaStr = min[60-m] + ' para a meia-noite';
    } else if (m == 15){
        horaStr = 'um quarto depois das ' + hora[h];
    } else if (m == 30){
        horaStr = hora[h] + ' e meia';
    } else if (m == 45){
        horaStr = 'um quarto para as ' + hora[(h+1)%24];
    } else if (m < 30) {
        horaStr = hora[h] + ' e ' + min[m] + ' minutos';
    } else if (m > 30){
        horaStr = min[60-m] + ' para as ' + hora[(h+1)];
    }
    
    if (horaStr.endsWith('meia')) {
        horaStr = hora[h] + ' e meia';
    }
    
    return horaStr;
}

console.log(tempoEmPalavras(23, 41)); // vinte para a meia-noite
console.log(tempoEmPalavras(0, 0)); // meia-noite em ponto
console.log(tempoEmPalavras(24, 0)); // meia-noite em ponto
console.log(tempoEmPalavras(12, 0)); // meio-dia em ponto
console.log(tempoEmPalavras
 */

function formataData(data) {
  const date = new Date(data);
  const hours = date.getHours();
  const mins = date.getMinutes();

  const h = {
    0: "meia-noite",
    1: "uma",
    2: "duas",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez",
    11: "onze",
    12: "meio-dia",
    13: "treze",
    14: "catorze",
    15: "quinze",
    16: "dezasseis",
    17: "dezassete",
    18: "dezoito",
    19: "dezanove",
    20: "vinte",
    21: "vinte e uma",
    22: "vinte e duas",
    23: "vinte e três",
  };
  const m = {
    0: "em ponto",
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez",
    11: "onze",
    12: "doze",
    13: "treze",
    14: "catorze",
    15: "um quarto",
    16: "dezasseis",
    17: "dezassete",
    18: "dezoito",
    19: "dezanove",
    20: "vinte",
    21: "vinte e um",
    22: "vinte e dois",
    23: "vinte e três",
    24: "vinte e quatro",
    25: "vinte e cinco",
    26: "vinte e seis",
    27: "vinte e sete",
    28: "vinte e oito",
    29: "vinte e nove",
    30: "meia",
    31: "trinta e um",
    32: "trinta e dois",
    33: "trinta e três",
    34: "trinta e quatro",
    35: "trinta e cinco",
    36: "trinta e seis",
    37: "trinta e sete",
    38: "trinta e oito",
    39: "trinta e nove",
    40: "quarenta",
    41: "quarenta e um",
    42: "quarenta e dois",
    43: "quarenta e três",
    44: "quarenta e quatro",
    45: "três quartos",
    46: "quarenta e seis",
    47: "quarenta e sete",
    48: "quarenta e oito",
    49: "quarenta e nove",
    50: "cinquenta",
    51: "cinquenta e um",
    52: "cinquenta e dois",
    53: "cinquenta e três",
    54: "cinquenta e quatro",
    55: "cinquenta e cinco",
    56: "cinquenta e seis",
    57: "cinquenta e sete",
    58: "cinquenta e oito",
    59: "cinquenta e nove",
  };
  
  if (mins == 0) {
    return h[hours] + " " + m[mins];
  } else {
    return h[hours] + " e " + m[mins];
  }
}

console.log(formataData(new Date("2021-05-17 09:00")));
