function calculaEstacaoDoAno(dia, mes) {
    // escreve aqui a função
    // Primavera - 21 de Março a 20 de Junho
    // Verão - 21 de Junho a 20 de Setembro
    // Outono - 21 de Setembro a 20 de Dezembro
    // Inverno - 21 de Dezembro a 20 de Março

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    } else if ((mes === 2) && dia < 1 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28."
    } else if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31."
    } else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor itroduza um dia entre 1 e 30."
    } else {
        if (mes === 4 || mes === 5 || (mes === 3 && dia > 20) || (mes === 6 && dia <= 21)) {
            return "Primavera"
        } else if (mes === 7 || mes === 8 || (mes === 6 && dia > 20) || (mes === 9 && dia <= 21)) {
            return "Verão"
        } else if (mes === 10 || mes === 11 || (mes === 9 && dia > 20) || (mes === 12 && dia < 21)) {
            return "Outono"
        } else if (mes === 1 || mes === 2 || (mes === 12 && dia > 20) || (mes === 3 && dia <= 21)) {
            return "Inverno"
        }
    }
}