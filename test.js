function maiorString(array){
    let length = 0
    let longest = ""

    for(let i = 0; i < array.length; i++){

        if(array[i].length > longest.length){
            length = array[i].length
            longest += array[i]
        }
    

    return longest
}
}

console.log(maiorString['aviao', 'ceu', 'tres', 'cinco'])