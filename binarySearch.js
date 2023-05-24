function binarySearch(array, num) {
    // Calcula o pivot, sendo um valor central entre 2 outros valores (máximo e mínimo)
    const getPivot = (a, b) => Math.round((a + b) / 2);

    // No início, o número está entre o primeiro elemento do array
    let min = 0;
    // e o último
    let max = array.length - 1;

    // Obtem-se o primeiro pivot
    let pivot = getPivot(max, min);
    let count = 0;

    // Enquanto o índice mínimo possível for menor ou igual ao máximo possível
    while (min <= max) {
        count++;

        // Se o elemento no pivot for o número pretendido
        if (array[pivot] === num) {
            // Retorna o objeto
            return {
                foundAtIndex: pivot,
                numberOfGuesses: count
            };
        } else if (array[pivot] > num) {
            // Caso o elemento no pivot seja maior, atualiza-se o máximo de modo a que não inclua o pivot e os números maiores que o pivot
            max = pivot - 1;
            pivot = getPivot(max, min);
        } else {
            // Semelhante caso o pivot seja menor
            min = pivot + 1;
            pivot = getPivot(max, min);
        }
    }

    // Se não encontrou, retorna com o valor de null
    return {
        foundAtIndex: null,
        numberOfGuesses: count
    };
}
