// Implementa a função contaOcurrencias que recebe um array e retorna um mapa em que as chaves são os elementos únicos no array e os valores a quantidade de vezes que esses elementos se repetem.

function contaOcurrencias(array){

    return array.reduce((mapaDeOcorrencias, elemento) => {
        if(mapaDeOcorrencias.has(elemento)){
            return new Map([
                ...mapaDeOcorrencias,
                [elemento, mapaDeOcorrencias.get(elemento) + 1]
            ])
        }else {
            return new Map([
                ...mapaDeOcorrencias,
                [elemento, 1]
            ])
        }
        

    }, new Map())


}


console.log(contaOcurrencias([1, 3, 1, 4, 5]));

//Pseudo: Criar um mapa com o metodo reduce em que as chaves sejam os elementos unicos do array, associar como valor o numero de vezes que cada um aparece na array

// Parametros: Array => Numbers, Integers, Positive 
// Return: Mapa => key: Number(Elemento do Array) : value:Numero de vezes que a key aparece no array

//Exemplos: [1, 3, 1, 4, 5] => [[1 => 2], [ 3 => 1], [4 => 1], [5 => 1]]

