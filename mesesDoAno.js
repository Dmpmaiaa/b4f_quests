function mesesDoAno(m) {

    const mesesDoAno = [
        {
            1: 'Janeiro',
            2: 'Fevereiro',
            3: 'Março',
            4: 'Abril',
            5: 'Maio',
            6: 'Junho',
            7: 'Julho',
            8: 'Agosto',
            9: 'Setembro',
            10: 'Outubro',
            11: 'Novembro',
            12: 'Dezembro'
        }
    ]

    return mesesDoAno[0][m] ? mesesDoAno[0][m] : "Número inválido. Por favor insira um número entre 1 e 12."
    

 
}
console.log(mesesDoAno(0))