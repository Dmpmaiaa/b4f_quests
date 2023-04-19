function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    const diferencaBases = (comprimentoMaior - comprimentoMenor) / 2;
    const ladoInclinado = Math.sqrt(Math.pow(altura, 2) + Math.pow(diferencaBases, 2));

    // Calcular o perímetro do trapézio
    const perimetro = comprimentoMaior + comprimentoMenor + (2 * ladoInclinado);
    return perimetro;
}