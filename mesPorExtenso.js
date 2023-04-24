function mesesDoAno(m) {
    const mapaDosMeses = new Map([
        [1, 'Janeiro'],
        [2, 'Fevereiro'],
        [3, 'Março'],
        [4, 'Abril'],
        [5, 'Maio'],
        [6, 'Junho'],
        [7, 'Julho'],
        [8, 'Agosto'],
        [9, 'Setembro'],
        [10, 'Outubro'],
        [11, 'Novembro'],
        [12, 'Dezembro'],
    ])

    return m < 1 || m > 12 ? "Número inválido. Por favor insira um número entre 1 e 12." : mapaDosMeses.get(m)
}

