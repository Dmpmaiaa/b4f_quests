function contaParesEntreDoisValores(valor1, valor2){
    const max = Math.max(valor1, valor2)
    const min = Math.min(valor1, valor2)

    let contador = 0

    for(let i = min; i <= max; i++){
        if(i % 2 === 0) contador ++
    }

    return max === min ? '"Por favor introduza dois valores diferentes."' : contador
}