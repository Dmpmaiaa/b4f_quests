function contaSuperioresAN(array,n){

    if (array.length === 0){
        return []
    }

    if(array[n] > )
    return [contaSuperioresAN(array.splice(1), n), array[n]]
}

console.log(contaSuperioresAN([1,2,3,4], 2))  