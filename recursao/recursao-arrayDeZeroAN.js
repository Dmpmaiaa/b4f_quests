// Cria uma função que recebe um número como argumento e retorna um array com os números de 0 a n.
// Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."
// Utiliza o que aprendeste sobre puta da recursão  para resolver este exercício.
// Exemplo de Output: arrayDe0AN(4) // [0,1,2,3,4]


function arrayDe0AN(n){

    if(typeof n !== 'number' || n < 0){
        return "Por favor insira um número superior a 0."
    }

    if(n === 0){
        return [0]
    }

    return [...arrayDe0AN(n-1), n]

}

console.log(arrayDe0AN(4));






























// function arrayDeZeroAN(n) {
//     if(n === 0) return [0]
//     return [n, ...arrayDeZeroAN(n - 1)]
// }



// function contaPares(array){
    
    
    
// }



// console.log(arrayDeZeroAN(4));
