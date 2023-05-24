if (aresta <= 0) {
    return "Por favor insira um valor positivo.";
  }

  const area = 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * Math.pow(aresta, 2);
  const areaArredondada = Math.round(area * 100) / 100;
  return areaArredondada;