function diasAteAoNatal(dia, mes) {
    const diasDosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const mesesComTrinta = [1, 5, 9, 11];
    const diaDeNatal = 359
    let diasAteAoNatal = 0
    let somaDosDias = 0;
  
    if (dia < 1 || dia > 31) {
      return "Por favor introduza um dia entre 1 e 31.";
  
    }
    if (mes < 1 || mes > 12) {
      return "Por favor introduza um mês entre 1 e 12.";
  
    }
    if (mesesComTrinta.includes(mes) && dia > 30) {
      return "Por favor introduza um dia entre 1 e 30.";
  
    }
    if (mes == 2 && dia > 28) {
      return "Por favor introduza um dia entre 1 e 28.";
  
    }
  
    for (let i = 1; i <= 12; i++) {
      if (mes === 1) {
          somaDosDias = dia;
    
        } else {
          let mesesASomar = diasDosMeses.slice(0, mes - 1);
          somaDosDias = mesesASomar.reduce((acc, c) => acc + c) + dia;
    
        }
    }
 

    if(dia > 25 && mes === 12){
      diasAteAoNatal = 365 - somaDosDias + 365
      return `Faltam ${diasAteAoNatal} dias até ao Natal.`

    }else if(dia === 25 && mes === 12){
      return 'Hoje é dia de Natal'

    } else{
      diasAteAoNatal = diaDeNatal - somaDosDias
      return `Faltam ${diasAteAoNatal} ${diasAteAoNatal === 1 ? 'dia' : 'dias'} até ao Natal.`
  }
}
