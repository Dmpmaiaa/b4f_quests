function contaPares(array){

    if (array.length === 0) {
        return 0
    }



    return (array[array.length - 1] % 2 === 0 ?1 :0 )+ contaPares(array.slice(0, array.length - 1))
}

console.log(contaPares([1,2,3,4]))


