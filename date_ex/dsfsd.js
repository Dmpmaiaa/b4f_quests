function calculaSigno(dia, mes) {
    // escreve aqui a função

    let mesesTr = [4, 6, 9, 11];
    let mesesTrUm = [1, 3, 5, 7, 8, 10, 12];


    if (mes < 1  mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }

    if (mesesTr.includes(mes) && (dia < 1  dia > 30)) {
        return "Por favor introduza um dia entre 1 e 30."
    }
    if (mesesTrUm.includes(mes) && (dia < 1  dia > 31)) {
        return "Por favor introduza um dia entre 1 e 31."
    }

    if ((mes === 3 && dia >= 21)  (mes === 4 && dia <= 20)) {
        return "Carneiro";
    }
    if ((mes === 4 && dia >= 21)  (mes === 5 && dia <= 20)) {
        return "Touro";
    }
    if ((mes === 5 && dia >= 21)  (mes === 6 && dia <= 20)) {
        return "Gémeos";
    }
    if ((mes === 6 && dia >= 21)  (mes === 7 && dia <= 22)) {
        return "Caranguejo";
    }
    if ((mes === 7 && dia >= 23)  (mes === 8 && dia <= 22)) {
        return "Leão";
    }
    if ((mes === 8 && dia >= 23)  (mes === 9 && dia <= 22)) {
        return "Virgem";
    }
    if ((mes === 9 && dia >= 23)  (mes === 10 && dia <= 22)) {
        return "Balança";
    }
    if ((mes === 10 && dia >= 23)  (mes === 11 && dia <= 21)) {
        return "Escorpião";
    }
    if ((mes === 11 && dia >= 22)  (mes === 12 && dia <= 21)) {
        return "Sagitário";
    }
    if ((mes === 12 && dia >= 22)  (mes === 1 && dia <= 20)) {
        return "Capricórnio";
    }
    if ((mes === 1 && dia >= 21)  (mes === 2 && dia <= 18)) {
        return "Aquário";
    }
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        return "Peixes";
    }
}