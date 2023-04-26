class Calculadora {
    constructor() {
        this.resultado = 0;
        this.historico = [];
    }

    somar(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ?? a;

        this.resultado = BigInt(valor1) + BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} + ${valor2} = ${this.resultado}`,
        ];
2
        return this;
    }

    subtrair(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ?? a;

        this.resultado = BigInt(valor1) - BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} - ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    multiplicar(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) * BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} * ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    dividir(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) / BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} / ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    limparHistorico() {
        this.historico = [];
        this.resultado = 0;

        return this;
    }

    obterResultado() {
        return BigInt(this.resultado);
    }

    toJSON() {
        let jsonObject = {
            historico: this.historico.map((el, i) => `${el}`),
            ultimoResultado: String(this.resultado),
        };

        return jsonObject;
    }

    toString() {
        if (this.historico.length === 0) {
            return "Calculadora Limpa";
        } else {
            if (this.historico.length === 1) {
                return `=== Histórico da Calculadora ===\n${this.historico
                    .map((el, i) => i + 1 + ". " + el)
                    .join("\n")}\n=== Fim do Histórico ===\nFoi realizada ${
                    this.historico.length
                } operação\nÙltimo Resultado: ${this.obterResultado()}`;
            } else {
                return `=== Histórico da Calculadora ===\n${this.historico
                    .map((el, i) => i + 1 + ". " + el)
                    .join("\n")}\n=== Fim do Histórico ===\nForam realizadas ${
                    this.historico.length
                } operações\nÙltimo Resultado: ${this.obterResultado()}`;
            }
        }
    }
}

const calcs = new Calculadora();

console.log(calcs.somar(1, 1));
console.log(calcs.somar(242));
console.log(calcs.multiplicar(1123));
console.log(calcs.obterResultado())
console.log(calcs.toJSON())
console.log(calcs.toString())
console.log(calcs.limparHistorico())
console.log(calcs.toString())
