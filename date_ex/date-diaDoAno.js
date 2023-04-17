/* Cria uma função que recebe uma data como argumento e retorna o dia do ano entre 1 e 366.

Utiliza o que aprendeste sobre  para resolver este exercício.

Exemplo de Output: diaDoAno(new Date(2021,04,21)) //141  */

function diaDoAno(data) {
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    
    console.log(dia, mes, ano);
    
    if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        const anoBissexto = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        let mesesASomar = anoBissexto.slice(0, mes - 1) 
        return mesesASomar.reduce((acc, c) => acc + c) + dia
        
    } else {
        const anoComum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        let mesesASomar = anoComum.slice(0, mes - 1) 
        return mesesASomar.reduce((acc, c) => acc + c) + dia

    }
}

console.log(
    diaDoAno(
        new Date(
            "Wed Apr 21 2021 16:16:11 GMT+0100 (Central European Standard Time"
        )
    )
);



