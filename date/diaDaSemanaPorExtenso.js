function diaDaSemanaPorExtenso(data) {
    const dia = data.getDay() + 1
    const diasDaSemana = new Map([
        [1, "Domingo"],
        [2, "Segunda-feira"],
        [3, "Terça-feira"],
        [4, "Quarta-feira"],
        [5, "Quinta-feira"],
        [6, "Sexta-feira"],
        [7, "Sábado"],
    ]);

    return diasDaSemana.get(dia).toLowerCase()

}
