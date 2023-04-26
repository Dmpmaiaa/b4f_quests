function contaNumeroDeDivisoesPorDois(n){
    let contador = 0

    while (n >2){
        n /= 2
        contador++
    }
    return contador
}

console.log(contaNumeroDeDivisoesPorDois(8));