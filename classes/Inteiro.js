class Inteiro {
    #inteiro
    constructor(inteiro) {
        this.#inteiro = typeof inteiro === 'number' ? Math.floor(inteiro) : 0
    }

    get valor() {
        return this.#inteiro
    }
    set valor(nv) {
        if (Number.isNaN(Number(nv))) {
            this.#inteiro = this.#inteiro ? this.#inteiro : nv;
        } else {
            this.#inteiro = Math.floor(nv);
        }
    }
}


