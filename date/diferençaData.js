function diferencaEmDias(data1, data2) {
  let dia = 24 * 60 * 60 * 1000;

  let dataUmEmMs = new Date(data1).valueOf();
  let dataDoisEmMs = new Date(data2).valueOf();

  return Math.abs(Math.trunc((dataUmEmMs - dataDoisEmMs) / dia));
}

console.log(diferencaEmDias(new Date('Wed Jul 08 1987 12:25:33 GMT+0200 (Central European Summer Time)'), new Date("Fri Apr 15 1994 00:11:18 GMT+0200 (Central European Summer Time)")))