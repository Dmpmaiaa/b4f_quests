/*
Cria uma classe FabricaDeTestes que inclui uma propriedade testes, definida no construtor, que é um array de objetos com os argumentos, nome e o resultado esperados para esses argumentos ao invocar a função.

Deve incluir um método testar que recebe uma função como argumento.
O método deve invocar a função para cada teste existente, em que lhe passa os argumentos do teste e compara o resultado de invocar a função com o resultado esperado no teste.


O método testar deve retornar "Todos os testes executados com sucesso." quando em todos os testes, o resultado de chamar a função é igual ao resultado esperado.
Deve retornar uma string com o formato "Falhou x/n testes, exemplo: nome", quando pelo menos um teste falhar, em que:
x é a quantidade de testes que não passaram,
n é a quantidade total de testes e
nome é o nome do primeiro teste que falhou. */


// Define a classe FabricaDeTestes
class FabricaDeTestes {
  // Define o construtor da classe
  constructor(testes) {
    // Define a propriedade testes com o valor passado como argumento
    this.testes = testes;
  }

  // Define o método testar que recebe uma função como argumento
  testar(executarOperacao) {
    // Filtra os testes que não passaram
    const testesReprovados = this.testes.filter((elemento) => {
      // Executa a operação com os argumentos do teste e compara com o resultado esperado
      return (
        executarOperacao(...elemento.argumentos) !==
        elemento.resultadoEsperado
      );
    });

    // Calcula o número de testes que não passaram e o número total de testes
    const numeroDeTestesReprovados = testesReprovados.length;
    const numeroDeTestes = this.testes.length;

    // Verifica se todos os testes passaram
    if (testesReprovados.length === 0) {
      return "Todos os testes executados com sucesso.";
    } else {
      // Retorna uma mensagem indicando quantos testes falharam e qual o primeiro teste que falhou
      return `Falhou ${numeroDeTestesReprovados}/${numeroDeTestes}, exemplo: ${testesReprovados[0].nome} `;
    }
  }
}

// Define um array de testes de soma
const testesSoma = [
  { argumentos: [3, 2], resultadoEsperado: 5, nome: "Soma 3 e 2" },
  { argumentos: [4, 8], resultadoEsperado: 12, nome: "Soma 4 e 8" },
  { argumentos: [2, 2], resultadoEsperado: 4, nome: "Soma 2 e 2" },
];

// Cria uma instância da classe FabricaDeTestes com os testes de soma
const fabrica = new FabricaDeTestes(testesSoma);

// Define a função de soma
function soma(a, b) {
  return a + b;
}

// Chama o método testar da instância de FabricaDeTestes passando a função de soma como argumento e imprime o resultado no console
console.log(fabrica.testar(soma));
