function diferencaEntreDiagonais(arr) {
    let diagonalA = 0
    let diagonalB = 0
    for(let i = 0; i< arr.length; i++){
        linha = arr[i]
        diagonalA += linha[i]
        diagonalB += linha[arr.length-1-i]

        
    }



   return diagonalA - diagonalB


}