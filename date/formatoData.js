function formataData(data) {
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();

  dia < 10 ? (dia = "0" + dia) : dia;
  mes < 10 ? (mes = "0" + mes) : mes;
  return `${mes}-${dia}-${ano}`;
}
