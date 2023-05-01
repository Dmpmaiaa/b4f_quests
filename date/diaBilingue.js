function diaDaSemanaPorExtensoBilingue(data, lingua) {
  // escreve aqui a função
  const dia = data.getDay();
  const listaDias = [
    { pt: "domingo", en: "sunday" },
    { pt: "segunda-feira", en: "monday" },
    { pt: "terça-feira", en: "tuesday" },
    { pt: "quarta-feira", en: "wednesday" },
    { pt: "quinta-feira", en: "thursday" },
    { pt: "sexta-feira", en: "friday" },
    { pt: "sábado", en: "saturday" },
  ];

  return listaDias[dia][lingua];
}

console.log(
  diaDaSemanaPorExtensoBilingue(
    new Date(
      "Mon Feb 08 1999 08:05:40 GMT+0100 (Central European Standard Time)"
    ),
    "en"
  )
);
