function superficieDaPiramideQuadrada(ladodabase, altura) {
  const areaBase = ladodabase ** 2;

  const alturaTriangulo = Math.sqrt((ladodabase / 2) ** 2 + altura ** 2);
  const areaLateral = (ladodabase * alturaTriangulo) / 2;
  const areaTotal = areaBase + 4 * areaLateral;

  return areaTotal;
}
