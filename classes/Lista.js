class Lista {
    #primeiro
    constructor(outroElemento) {
        this.#primeiro = outroElemento ? outroElemento : null
    }

    insereNoprimeiro(elemento) {
        elemento.proximo = this.#primeiro
        this.#primeiro = elemento
    }

    get primeiroDaLista() {
        return this.#primeiro
    }
}

class ElementoDaLista {
    #dados
    #proximo
    constructor(dados, proximo) {
        this.#dados = dados
        this.#proximo = proximo
    }


    get getDados() {
        return this.#dados
    }

    get getProximo() {
        return this.#proximo
    }

    set setProximo(ele) {
        this.#proximo = ele
    }


    get eUltimo() {
        console.log(this.#proximo)
        return this.#proximo != undefined

    }
}

const lista = new Lista(new ElementoDaLista(3))
lista.insereNoInicio(new ElementoDaLista(5))
console.log(lista.inicioDaLista.eUltimo)