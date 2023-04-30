class Pilha {


    constructor(capacidade) {
        this.pile = []
        this.capacidade = capacidade ? capacidade : Infinity
    }

    
    adicionar(elem) {
        if (this.pile.length < this.capacidade) {
            this.pile.unshift(elem)
        } else {
            return 'Pilha cheia!'
        }

    }

    remover() {
        if (this.pile.length === 0) {
            return 'Pilha vazia!'
        } else {
            this.pile.shift()
        }
    }

    obterValor() {
        if (this.pile.length === 0) {
            return 'Pilha vazia!'
        } else {
            return this.pile[0]
        }
    }




}