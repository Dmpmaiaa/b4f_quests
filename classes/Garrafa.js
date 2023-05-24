class GarrafaDeAgua {
    #capacidade;
    #quantidade;
    #aberta;

    constructor(capacidade) {
        this.#capacidade = capacidade;
        this.#quantidade = 0;
        this.#aberta = false;
    }

    beber() {
        if (this.#aberta) {
            if (this.#quantidade >= 200) {
                this.#quantidade -= 200;
                return `Você bebeu 200 da quantidade. Quantidade atual: ${this.#quantidade}`;
            } else if (this.#quantidade > 0) {
                const quantidadeConsumida = this.#quantidade;
                this.#quantidade = 0;
                return `Você bebeu ${quantidadeConsumida}. A garrafa está vazia`;
            } else {
                return "A garrafa está vazia";
            }
        } else {
            return "A garrafa está fechada";
        }
    }

    encher(quant) {
        if (this.#aberta) {
            this.#quantidade = Math.min(this.#capacidade, this.#quantidade + quant);
            return `A garrafa foi enchida. Quantidade atual: ${this.#quantidade}`;
        } else {
            return "A garrafa está fechada";
        }
    }

    abrirFechar() {
        this.#aberta = !this.#aberta;
        return this.#aberta ? "A garrafa foi aberta" : "A garrafa foi fechada";
    }

    get quantidade() {
        return this.#quantidade;
    }

    get aberta() {
        return this.#aberta;
    }

    get capacidade() {
        return this.#capacidade;
    }
}