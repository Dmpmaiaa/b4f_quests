// Cria uma classe chamada ContadorDeInstancias que tem:

// um construtor, que não recebe nenhum argumento nem define nenhuma propriedade da instância
// uma propriedade estática instancias que tem o número de instâncias criadas até um determinado momento


class ContadorDeInstancias{
    static instancias = 0
    constructor(){
        this.instancia = ContadorDeInstancias.instancias++
    }


}

const novaIns = new ContadorDeInstancias()
const novaIns1 =new ContadorDeInstancias()

console.log(ContadorDeInstancias.instancias)
console.log(novaIns.instancias)
console.log(novaIns1.instancias)



class Mesa{
    constructor(cor, material){
    this.cor = cor
    this.material = material
    }
}

const mesaVermelha = new Mesa('vermelha', 'pedra')

const mesaDeQuintal = new Mesa('verde', 'madeira')