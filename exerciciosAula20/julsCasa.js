// Cria uma função que mapeia cada elemento de um array de strings para o seu comprimento.

const mapStringElement = (array) => array.map((element) => element.length);

function mapString(array) {
    let novaArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        novaArray.push(element.length);
    }

    return novaArray;
}

console.log(mapStringElement(["Julio", "Tomas"])); // [5, 5]

// Cria uma função que filtra os elementos pares, mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatório dos elementos resultantes.

const flerMapAndReduce = (array) => {
    return array
        .filter((element) => element % 2 === 0)
        .map((element) => element ** 2)
        .reduce((acc, c) => acc + c, 0);

    //return number
};

console.log(flerMapAndReduce([3, 5, 1, 6, 8]));

// Cria uma função que mapeia cada elemento de um array de strings para a string invertida.
// A inversão de cada string deve ser implementada utilizando uma função recursiva.

const mapeiaParaArray = (array) => {
    return array.map((element) => invertePalavra(element));
};

const invertePalavra = (str) => {
    if (str.length === 0) {
        return "";
    }

    return str[str.length - 1] + invertePalavra(str.slice(0, str.length - 1));
};

console.log(mapeiaParaArray(["Hugo", "Diogo", "oidualC uC"]));

// Cria uma função que retorna true se todos os elementos do array forem pares.

const encontraPares = (array) => {
    return array.every((el) => el % 2 === 0);
};

console.log(encontraPares([2, 4, 8]));

// Cria uma função que retorna true se pelo menos um dos elementos do array for par.

const encontraUmPar = (array) => {
    return array.some((el) => el % 2 === 0);
};

console.log(encontraUmPar([2, 4, 8, 7]));

// Cria uma função que reduz um array de números para um Map que tem como chaves os valores do array e como valores o número de ocorrências da chave. (mapa de ocOrrências)

const criarNovoMapa = (array) => {
    return array.reduce((pqp, boi) => {
        if (pqp.has(boi)) {
            return new Map(...pqp, [boi, pqp.get(boi) + 1]);
        } else {
            return new Map(...pqp, [boi, 1]);
        }
    }, new Map());
};

// Cria uma função que mapeia cada elemento de um array de objetos com as propriedades name e birthday para um objeto que além destas propriedades, tem a propriedade age.

const pessoa = [
    {
        name: "Diogo",
        birthday: new Date('1993,12,20'),
    },
    {
        name: "Julio",
        birthday: new Date('1990,04,29'),
    },
];

function mapObject(array) {
    let years = 365 * 24 * 60 * 60 * 1000

    return array.map((obj) => {
        return {
            ...obj,
            age : Math.round((new Date().valueOf() - obj.birthday.valueOf()) / years)
        }
    });
}

console.log(mapObject(pessoa));
