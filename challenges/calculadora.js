// Implementa uma classe que representa uma calculadora simples, apenas para números inteiros de qualquer dimensão, com apenas quatro operações:

// Somar
// Subtrair
// Dividir
// Multiplicar
// A calculadora deve guardar o histórico e o último resultado. Deve ser possível limpar o histórico da calculadora.

// O nome da classe a implementar é Calculadora, e deve conter os seguintes métodos:

// Deve ficar registada a operação no histórico e deve ser atualizado o último resultado.

// multiplicar(a, b)
// O método recebe um ou dois argumentos. Se b não estiver definido, deve ser utilizado o último resultado como primeiro argumento da multiplicação.
// O método deve retornar a instância da calculadora, e não o resultado da multiplicação.
// Deve ficar registada a operação no histórico e deve ser atualizado o último resultado.

// dividir(a, b)
// O método recebe um ou dois argumentos. Se b não estiver definido, deve ser utilizado o último resultado como primeiro argumento da divisão.

// O método deve retornar a instância da calculadora, e não o resultado da divisão.

// Deve ficar registada a operação no histórico e deve ser atualizado o último resultado.

// limparHistorico()
// Quando este método é invocado, a calculadora deve ficar num estado limpo, ou seja, com o histórico vazio e com o último resultado a 0.

// Esta função deve retornar a instância da calculadora.

// obterResultado()
// Retorna o último resultado como um BigInt.

// toJSON()
// Retorna um objecto em formato JSON com duas propriedades: historico e ultimoResultado.

// O historico deve ser um array que tem, em cada posição, uma operação no formato a op b = resultado, ou seja, 1 + 2 = 3. O historico deve estar ordenado da primeira operação para a última.

// O ultimoResultado deve ser a representação textual do número.

// toString()
// Se não existir qualquer operação no historico, este método deve retornar "Calculadora Limpa".

class Calculadora {
    constructor() {
        this.resultado = 0;
        this.historico = [];
    }

    // somar(a, b)
    // O método recebe um ou dois argumentos. Se b não estiver definido, deve ser utilizado o último resultado como primeiro argumento da soma.
    // O método deve retornar a instância da calculadora, e não o resultado da soma.
    somar(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) + BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} + ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    // subtrair(a, b)
    // O método recebe um ou dois argumentos. Se b não estiver definido, deve ser utilizado o último resultado como primeiro argumento da subtração.
    // O método deve retornar a instância da calculadora, e não o resultado da subtração.
    // Deve ficar registada a operação no histórico e deve ser atualizado o último resultado.
    subtrair(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) - BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} - ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    // multiplicar(a, b)
    // O método recebe um ou dois argumentos. Se b não estiver definido, deve ser utilizado o último resultado como primeiro argumento da multiplicação.
    // O método deve retornar a instância da calculadora, e não o resultado da multiplicação.
    // Deve ficar registada a operação no histórico e deve ser atualizado o último resultado.
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

    dividr(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) + BigInt(valor2);
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
        return this.resultado;
    }

    toJson() {
        let jsonObject = {
            historico: this.historico.map((el, i) => `${i + 1} : ${el}`),
            ultimoResultado: String(this.resultado),
        };

        return JSON.stringify(jsonObject);
    }

    toString() {
        if (this.historico.length === 0) {
            return "Calculadora Limpa";
        } else {
            return (
                "=== Histórico da Calculadora ===\n" +
                this.historico.map((el, i) => `${i + 1}. ${el}`).join("\n") +'\n' +
                "=== Fim do Histórico ===\n" +
                `Foram realizadas ${this.historico.length} operações\n` +
                `Ùltimo Resultado: ${this.obterResultado()}`
            );
        }
    }
}

const calcs = new Calculadora();

console.log(calcs.dividr(1, 2));
console.log(calcs.dividr(2));
console.log(calcs.historico);
console.log(calcs.toString());

// console.log();

// console.log(calcs.somar(6));
// console.log(calcs.multiplicar(2));
// console.log(calcs.obterResultado());
// console.log(calcs.toString())
