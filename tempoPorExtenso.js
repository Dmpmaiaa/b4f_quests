function tempoEmPalavras(h, m) {
    const minutosPorExtenso = new Map([
        [0, "em ponto"],
        [1, "um"],
        [2, "dois"],
        [3, "três"],
        [4, "quatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "sete"],
        [8, "oito"],
        [9, "nove"],
        [10, "dez"],
        [11, "onze"],
        [12, "doze"],
        [13, "treze"],
        [14, "catorze"],
        [15, "um quarto"],
        [16, "dezasseis"],
        [17, "dezassete"],
        [18, "dezoito"],
        [19, "dezanove"],
        [20, "vinte"],
        [21, "vinte e um"],
        [22, "vinte e dois"],
        [23, "vinte e três"],
        [24, "vinte e quatro"],
        [25, "vinte e cinco"],
        [26, "vinte e seis"],
        [27, "vinte e sete"],
        [28, "vinte e oito"],
        [29, "vinte e nove"],
        [30, "meia"],
    ]);

    const horasPorExtenso = new Map([
        [0, "meia noite"],
        [1, "uma"],
        [2, "duas"],
        [3, "três"],
        [4, "quatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "sete"],
        [8, "oito"],
        [9, "nove"],
        [10, "dez"],
        [11, "onze"],
        [12, "meio dia"],
    ]);

    let horas;
    let minutos;
    let horaAtual = h - horasPorExtenso.size + 1;
    let horaSeguinte = h - horasPorExtenso.size + 2;

    // Horas

    if (h === 23) {
        horas =
            m <= 30 ? horasPorExtenso.get(horaAtual) : horasPorExtenso.get(0);
    } else if (h > 12) {
        horas =
            m <= 30
                ? horasPorExtenso.get(horaAtual)
                : horasPorExtenso.get(horaSeguinte);
    } else if (h === 12) {
        horas = m <= 30 ? horasPorExtenso.get(h) : horasPorExtenso.get(1);
    } else {
        horas = m <= 30 ? horasPorExtenso.get(h) : horasPorExtenso.get(h + 1);
    }
    

    // Minutos
    minutos =
        m <= 30 ? minutosPorExtenso.get(m) : minutosPorExtenso.get(60 - m);

    if (m > 30) {
        if (horas === "uma" || horas === "meia noite") {
            return `${minutos} para a ${horas}`;
        } else if (horas === "meio dia") {
            return `${minutos} para o ${horas}`;
        } else {
            return `${minutos} para as ${horas}`;
        }
    } else {
        return `${horas} e ${minutos}`;
    }
}


