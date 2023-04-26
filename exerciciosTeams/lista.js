class Lista {
    #inicio
    constructor(outroElemento) {
        this.#inicio = outroElemento ? outroElemento : null
    }

    insereNoInicio(elemento) {
        elemento.proximo = this.#inicio
        this.#inicio = elemento
    }

    get inicioDaLista() {
        return this.#inicio
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