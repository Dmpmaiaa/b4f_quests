function calculaDiasParaONatal(dia, mes) {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Array
    let diaDeNatal = 359; // Number
    const mesesASomar = diasPorMes.slice(0, mes - 1); // Array

    let diaAtual = mesesASomar.reduce((acc, c) => acc + c) + dia; //Number

    console.log(diaAtual);

    if (diaAtual > 359) {
        return diaDeNatal - diaAtual + 365;

    } else if(diaAtual < 359){
        return diaDeNatal - diaAtual;

    } else{
        return 'It\'s Xmas!' 
    }
}
//F - FIRST 
//A - ATTEMPT
//I - IN
//L - LEARNING

console.log(calculaDiasParaONatal(25, 5));

//dia que estamos
