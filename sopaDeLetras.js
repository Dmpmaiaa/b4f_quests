function sopaDeLetras(array, string) {
    let palavraHorizontal = "";
    let palavraVertical = "";

    for (let i = 0; i < array.length; i++) {
        let linha = array[i];
        palavraHorizontal += linha.join('');
        console.log(palavraHorizontal)
        palavraVertical += linha[i][linha.length -1 + 1];
        
;
}}

// return string === palavraHorizontal || string === palavraHorizontal;

console.log(
    sopaDeLetras(
        [
            ["o", "o", "p"],
            ["l", "l", "o"],
            ["a", "y", "y"],
        ],
        "ola"
    )
)
