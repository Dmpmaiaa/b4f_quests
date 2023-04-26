function diaDoAno(data) {
  let diaDoAno = 0;
  let ano = data.getFullYear();
  let dia = data.getDate() + 1;
  let mes = data.getMonth() + 1;

  if (ano % 4 === 0) {
    if (ano % 100 === 0) {
      return ano % 400 === 0;
    } else {
      let meses = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (mes === 1) {
        return dia;
      }

      let somaDosMeses = 0;
      for (let i = 0; i < mes; i++) {
        somaDosMeses += meses[i];
      }

      diaDoAno = somaDosMeses + dia - 1;

      return diaDoAno;
    }
  } else {
    // If it is not divisible by 4, then it is not a leap year
    let meses = [0, 30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes === 1) {
      return dia;
    }

    let somaDosMeses = 0;
    for (let i = 0; i < mes; i++) {
      somaDosMeses += meses[i];
    }

    diaDoAno = somaDosMeses + dia;

    return diaDoAno;
  }
}

console.log(
  diaDoAno(
    new Date(
      "Wed May 25 2000 16:16:11 GMT+0100 (Central European Standard Time"
    )
  )
);
