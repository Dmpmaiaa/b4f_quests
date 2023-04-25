/*
Cria uma classe FabricaDeTestes que inclui uma propriedade testes, definida no construtor, que é um array de objetos, com os argumentos, nome e o resultado esperados para esses argumentos ao invocar a função.

Deve incluir um método testar que recebe uma função como argumento.
O método deve invocar a função para cada teste existente, em que lhe passa os argumentos do teste e compara o resultado de invocar a função com o resultado esperado no teste.


O método testar deve retornar "Todos os testes executados com sucesso." quando em todos os testes, o resultado de chamar a função é igual ao resultado esperado.
Deve retornar uma string com o formato "Falhou 1/3 testes, exemplo: Soma 3 e 2", quando pelo menos um teste falhar, em que:
x é a quantidade de testes que não passaram,
n é a quantidade total de testes e
nome é o nome do primeiro teste que falhou. */
///

class FabricaDeTestes {
    constructor(testes) {
        this.testes = testes;
    }

    testar(func) {
        const resultadosReprovados = this.testes.filter(
            (Elemento) =>
                func(Elemento.argumentos[0], Elemento.argumentos[1]) !==
                Elemento.resultadoEsperado
        );

        if (resultadosReprovados.length === 0) {
            return "Todos os testes executados com sucesso.";
        } else {
            return `Falhou ${resultadosReprovados.length}/${this.testes.length} testes, exemplo: ${resultadosReprovados[0].nome}`;
        }
    }
}





function soma(a, b) {
    return a + b;
}


function sub(a, b) {
    return a - b;
}


const fabricaSomas = new FabricaDeTestes([
    { argumentos: [3, 2], resultadoEsperado: 5, nome: "Soma 3 e 2" },
    { argumentos: [4, 8], resultadoEsperado: 12, nome: "Soma 4 e 8" },
    { argumentos: [2, 2], resultadoEsperado: 4, nome: "Soma 2 e 2" },
]);

const fabricaSubtracoes = new FabricaDeTestes([
    { argumentos: [3, 2], resultadoEsperado: 1, nome: "Subtraí 3 e 2" },
    { argumentos: [4, 8], resultadoEsperado: -4, nome: "Subtraí 4 e 8" },
    { argumentos: [2, 3], resultadoEsperado: 0, nome: "Subtraí 2 e 2" },
]);

console.log(fabricaSomas.testar(soma));
console.log(fabricaSubtracoes.testar(sub));
