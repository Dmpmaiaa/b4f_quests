// function combineArrays(array1, array2) {
//     let arrayToReturn = [];
//     for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
//         if (array1[i] && array2[i]) {
//             arrayToReturn.push(array1[i]);
//             arrayToReturn.push(array2[i]);
//         } else if (array1[i] === undefined) {
//             arrayToReturn.push(array2[i]);
//         } else if (array2[i] === undefined)
//             console.log(array1[i])
//             arrayToReturn.push(array1[i]);
//         }
//         return arrayToReturn;
//     }

// console.log(combineArrays(["a", "b", "c"], [1]));
function maiorStringEmNumeros(array){
    let comprimentos = []

    for(i = 0; i < array.length; i++){
        comprimentos.push(array[i].length)
    }

    let maior = Math.max(...comprimentos)
    let maiorString = ""

    for(i = 0; i < comprimentos.length; i++){
        if(comprimentos[i] === maior){
            let posicaoMaiorString = i
            maiorString = array[posicaoMaiorString]
        }
    }

    const numerosPorExtenso = new Map([
        ["um", 1],
        ["dois", 2],
        ["três", 3],
        ["quatro", 3],
        ["cinco", 5],
        ["seis", 6],
        ["oito", 8],
        ["nove", 9],
        ["dez", 10]
    ]
    )

    return numerosPorExtenso.has(maiorString) ? numerosPorExtenso.get(maiorString) : "Insira um array com pelo menos um número entre zero e dez"
}





console.log(maiorStringEmNumeros(['seis', 'sete', 'oi˜to', 'dez']))