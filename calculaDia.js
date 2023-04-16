// Cria uma função que recebe como argumentos um dia e um mês e retorna o dia do ano correspondente (entre 1 e 365).

// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."

// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."

// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."

// No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

// Utiliza o que aprendeste sobre  para resolver este exercício.

// function calculaDiaDoAno(dia, mes) {
//     const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // const MESES_COM_30_DIAS = [4, 5, 9, 11];
    // let somaDeDias = 0;

    // if (MESES_COM_30_DIAS.includes(mes) && dia > 30) {
    //     return "Por favor introduza um dia entre 1 e 30.";
    // }

    // if (mes === 2 && dia > 28) {
    //     return "Por favor introduza um dia entre 1 e 28.";
    // }

    // if (0 > dia || dia > 31) {
    //     return "Por favor introduza um dia entre 1 e 31.";
    // }

    // if (mes < 0 || mes > 12) {
    //     return "Por favor introduza um dia entre 1 e 12.";
    // }

//     for (let i = 0; i < DAYS_IN_MONTH.length; i++) {
//         if (i < mes - 1){
//              somaDeDias += DAYS_IN_MONTH[i];
//         }
//     }

//     return somaDeDias += dia
// }

// console.log(calculaDiaDoAno(31, 12))

// function contaNumeroDeDivisoesPorDois(n) {
//     let contagemDeVezes = 0

//     while (n > 1) {
//         n /= 2;
//         contagemDeVezes++;
//     }
//     return contagemDeVezes
// ~ñ

// console.log(contaNumeroDeDivisoesPorDois(2));
function somatorioAteN(n){
    let resulti = 0
    let contador = 0
    while(contador <= n){
        resulti +=contador
        contador ++
    }
    return resulti
}

console.log(somatorioAteN(2))