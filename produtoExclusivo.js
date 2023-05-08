// Cria a função , que recebe como argumento um .
// A função deve retornar um array em que cada posição do array deve ser o produto de todos os outros valores do array excluindo o próprio.

function produtoExclusivo(array) {
    return array.map((_, i) => array.filter((_, indN) => indN !== i).reduce((acc, c) => acc * c))


}

console.log(produtoExclusivo([9,8,7,6,5]))