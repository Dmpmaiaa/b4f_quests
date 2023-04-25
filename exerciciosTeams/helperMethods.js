// Cria uma função que MAPeia cada elemento de um array de strings para o seu comprimento.

function mapearStringParaComprimento(array) {
    return array.map((elemento) => elemento.length);
}

console.log(
    mapearStringParaComprimento([
        "Diogo",
        "Andrezza",
        "Rap",
        "CunhaCS",
        "Julio",
    ])
);

// Cria uma função que filtra os elementos pares, mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatório dos elementos resultantes.
//filter, map, reduce

function filtraCenas(array) {
    return array
        .filter((el) => el % 2 === 0)
        .map((el) => el ** 2)
        .reduce((acc, c) => acc + c, 0);
}

console.log(filtraCenas([4, 2, 5]));

// Cria uma função que mapeia cada elemento de um array de objetos com as propriedades name e birthday para um objeto que além destas propriedades, tem a propriedade age.

function mapeiaCenas(array) {
    return array.map((ele) => {
        const diaDeHoje = new Date().valueOf();
        const idade = diaDeHoje - ele.birthday.valueOf();

        return { ...ele, age: idade };
    });
}

const nossaArrayDeObj = [
    { nome: "Diogo", birthday: new Date(1993, 21, 11) },
    { nome: "Julio", birthday: new Date(1991, 03, 30) },
];

console.log(mapeiaCenas(nossaArrayDeObj));
