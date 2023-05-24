function mesPorExtensoBilingue(data, lingua) {
  // escreve aqui a função
  const month = data.getMonth()
  const monthList = [
    { pt: "Janeiro", en: "January" },
    { pt: "Fevereiro", en: "February" },
    { pt: "Março", en: "March" },
    { pt: "Abril", en: "April" },
    { pt: "Maio", en: "May" },
    { pt: "Junho", en: "June" },
    { pt: "Julho", en: "July" },
    { pt: "Agosto", en: "August" },
    { pt: "Setembro", en: "September" },
    { pt: "Outubro", en: "October" },
    { pt: "Novembro", en: "November" },
    { pt: "Dezembro", en: "December" },
  ];

  return monthList[month][lingua]
}

console.log(mesPorExtensoBilingue(new Date('2022,03,04'), 'pt'));