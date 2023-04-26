class Pessoa {
    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }

    comparaIdade(pessoa){
        if(this.idade > pessoa.idade){
            return `${pessoa.sexo === 'm' ? 'O' : 'A'} ${pessoa.nome} é mais ${pessoa.sexo === 'm' ? 'novo' : 'nova'} que eu.`
        }else if (this.idade < pessoa.idade){
            return `${pessoa.sexo ==='m' ? 'O' : 'A'} ${pessoa.nome} é mais ${pessoa.sexo === 'm' ? 'velho' : 'velha'} que eu.`

        }else{
            return `${pessoa.sexo === 'm' ? 'O' : 'A'} ${pessoa.nome} é da mesma idade que eu.`
        }

    }
}

const diogo = new Pessoa('Diogo', 29, 'm')
const cunha = new Pessoa('Cunha', 25, 'm')
const luanna = new Pessoa('Luanna', 27, 'f')
const tiago = new Pessoa('Tiago', 27, 'm')

console.log(diogo.comparaIdade(tiago))
console.log(cunha.comparaIdade(diogo))
console.log(luanna.comparaIdade(cunha))
console.log(tiago.comparaIdade(cunha))