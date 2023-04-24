/*
Implementa as classes  "Lista" e "ElementoDaLista"

A classe  "Lista" deve possuir 1  "método":

insereNoInicio()
O método deve receber um " ElementoDaLista" mas é uma classe, como argumento, e define esse elemento como início da lista.

Na classe  "Lista" deve também ser possível aceder ao  "primeiro" elemento da lista, ou seja, o início da lista.

A classe  Lista tem um construtor que recebe um elemento (ESTA PARTE É OPCIONAL). Se o elemento for recebido, passa a ser o  "primeiro" da lista.

A classe  ElementoDaLista deve ter um construtor, que define os  "dados" do elemento, também tem uma propriedade "próximo", que é uma referência para o próximo elemento da lista. Deve ser possível  "obter" e  "alterar" os valores do  "proximo" elemento. Deve ser possível  "obter" os  "dados" do elemento.

Deve também ser possível verificar se um "ElementoDaLista"   "eUltimo" da Lista.
*/

class Lista {
    constructor(elemento) {
        
        this.elementos = [elemento] ?? []

    }
  
    insereNoInicio(elementoDaLista) {
        this.elementos.unshift(elementoDaLista)
    }
  }
  

class ElementoDaLista {
   constructor(){
    this.proximo = 

   }
}