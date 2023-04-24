/*
Cria uma classe FabricaDeTestes que inclui uma propriedade testes, definida no construtor, que é um array de objetos com os argumentos, nome e o resultado esperados para esses argumentos ao invocar a função.

Deve incluir um método testar que recebe uma função como argumento.
O método deve invocar a função para cada teste existente, em que lhe passa os argumentos do teste e compara o resultado de invocar a função com o resultado esperado no teste.


O método testar deve retornar "Todos os testes executados com sucesso." quando em todos os testes, o resultado de chamar a função é igual ao resultado esperado.
Deve retornar uma string com o formato "Falhou x/n testes, exemplo: nome", quando pelo menos um teste falhar, em que:
x é a quantidade de testes que não passaram,
n é a quantidade total de testes e
nome é o nome do primeiro teste que falhou. */
///



class FabricaDeTestes {
  constructor(testes) {
    this.testes = testes;
  }

  testar(executarOperacao) {

    const testesReprovados = this.testes.filter((elemento) => {

        const valorEsquerda = elemento.argumentos[0]
        const valorDireita = elemento.argumentos[1]

      return (
        executarOperacao(valorEsquerda, valorDireita) !==
        elemento.resultadoEsperado
      );
    });


    const numeroDeTestesReprovados = testesReprovados.length
    const numeroDeTestes = this.testes.length
    

    if (testesReprovados.length === 0) {
      return "Todos os testes executados com sucesso.";
    } else {
      return `Falhou ${numeroDeTestesReprovados}/${numeroDeTestes}, exemplo: ${testesReprovados[0].nome} `;
    }
  }
}



const testesSoma = [
  { argumentos: [3, 2], resultadoEsperado: 5, nome: "Soma 3 e 2" },
  { argumentos: [4, 8], resultadoEsperado: 12, nome: "Soma 4 e 8" },
  { argumentos: [2, 2], resultadoEsperado: 4, nome: "Soma 2 e 2" },
];


const fabrica = new FabricaDeTestes(testesSoma);


function soma(a, b) {
  return a + b;
}
