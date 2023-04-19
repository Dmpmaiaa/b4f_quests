/* Completa a classe  "GARRAFA DE ÁGUA" que tem um construtor que recebe uma "QUANTIDADE". [x]

Deve ter a propriedade "ABERTA", que é um booleano e deve inicializada a . [x]

Deve ter a propriedade "QUANTIDADE", que é um valor entre  0 e "CAPACIDADE" e deve ser inicializada com o valor 0. []

Deve ser possível aceder às propriedades "CAPACIDADE", "QUANTIDADE" e "ABERTA" garantindo as regras acima. [x]

Deve ser possível abrir e fechar a GarrafaDeAgua através do método "abrirFechar". [x]

Deve ser possível beber da garrafa, através do método , consumindo  da quantidade e deve ser possível encher a garrafa através do método  que recebe um argumento . []

*/
class GarrafaDeAgua {
    #capacidade;
    #quantidade;
    #aberta;
    constructor(capacidade) {
        this.#capacidade = capacidade;
        this.#quantidade = 0;
        this.#aberta = false;
        //
    }
    beber() {
        if (this.#aberta) {
            if (this.#quantidade === 0) {
                return "A garrafa está vazia";
            }
            //
        } else {
            return "A garrafa está fechada";
        }
    }
    encher(quant) {
        if (this.#aberta) {
            //
            this.#quantidade = quant;
        } else {
            return "A garrafa está fechada";
        }
    }
    abrirFechar() {
        if (!this.#aberta) {
            this.#aberta = true;
            return this.#aberta;
        } else {
            this.#aberta = false;
            return this.#aberta;
        }
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
