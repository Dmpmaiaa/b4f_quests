/* Cria uma classe chamada ContadorDeInstancias que tem:
um construtor, que não recebe nenhum argumento nem define nenhuma propriedade da instância
uma propriedade estática instancias que tem o número de instâncias criadas até um determinado momento */


class ContadorDeInstancias{
    static instancias = 0
    constructor(){
        this.instancia = ++ContadorDeInstancias.instancias
    }
}

const novaInstancia = new ContadorDeInstancias()
const novaInstancia2 = new ContadorDeInstancias()

console.log(novaInstancia2.instancia);

