class Mesa {
    constructor(tampo){
        this.numeroDePernas = 0
        
    }

    montaPerna(perna){
        if(perna instanceof Perna){
            this.pernaMontada = true
            this.numeroDePernas++
            return `Estão ${this.numeroDePernas} montadas.`
        } else{
            return 'braço'
        }
        

    }


    estaMontada(){
        return this.numeroDePernas === 4
    }
}

class Tampo{
    constructor()
}

class Perna{
    constructor() {
        
    }
}


let minhaMesa = new Mesa(new Tampo())
let pernaDireita = new Perna()
let pernaEsquerda = new Perna()
let pernaCima = new Perna()
let pernaBaixo = new Perna()


console.log(minhaMesa.montaPerna(pernaDireita));

console.log(minhaMesa.montaPerna(pernaEsquerda));

console.log(minhaMesa.estaMontada())

console.log(minhaMesa.montaPerna(pernaCima));
console.log(minhaMesa.montaPerna(pernaBaixo));


console.log(minhaMesa.estaMontada())


