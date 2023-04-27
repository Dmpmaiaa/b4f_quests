
function superficieDoParalelepipedoQuadrado(ladoDaBase, comprimento) {
  
    const altura = comprimento;
    const areaDaBase = ladoDaBase * ladoDaBase;
    const areaDaLateral = ladoDaBase * altura;
    const areaDaFrente = ladoDaBase * comprimento;

    return 2 * (areaDaBase + areaDaLateral + areaDaFrente);


}
