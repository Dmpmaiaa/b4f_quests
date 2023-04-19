function diaDaSemana(dia) {
    const diasDaSemana = new Map([
        [1, "Domingo"],
        [2, "Segunda-feira"],
        [3, "Terça-feira"],
        [4, "Quarta-feira"],
        [5, "Quinta-feira"],
        [6, "Sexta-feira"],
        [7, "Sábado"],
    ]);

    return dia < 1 || dia > 7 ? 'Número inválido. Por favor insira um número entre 1 e 7.' : diasDaSemana.get(dia)

}

console.log(diaDaSemana(5));