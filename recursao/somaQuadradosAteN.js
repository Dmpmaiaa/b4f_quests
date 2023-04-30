function somaQuadradosAteN(n){
    if(n === 0){
        return 0
    }

    return n**2 + somaQuadradosAteN(n-1)
}

console.log(somaQuadradosAteN(3));