class Cat{
    constructor(nome, peso, alturaMaximoSalto, posVertical){
        this.name = nome;
        this.weight = peso;
        this.maxJumpHeight = alturaMaximoSalto;
        this.verticalPosition = posVertical
    }

    jump(power){
        if(power < 0 || power > 1){
            return 'Isto não é um sapo.'
        }else {
            this.verticalPosition += this.maxJumpHeight * power
        }
    }
}

const miaMel = new Cat('Mia Mel', 7, 150, 0)
miaMel.jump(0.2)
miaMel.jump(1)
console.log(miaMel.verticalPosition)