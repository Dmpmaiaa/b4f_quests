function fatoriaisDoArray(array) {

    return array.map(el => nFatorial(el))

}


function nFatorial(n) {

    if (n === 1) {
        return 1
    }

    return n * nFatorial(n - 1)
}

console.log(fatoriaisDoArray([1, 2, 3, 4]));
