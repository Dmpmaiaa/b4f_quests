function nFatorial(n){
    if(n===1){
        return 1
    }

    return n * nFatorial(n - 1)

}

console.log(nFatorial(3));