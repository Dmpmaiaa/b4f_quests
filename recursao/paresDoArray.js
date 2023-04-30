function paresDoArray(array){
    if (array.length === 0) return []

    
    return array[0] % 2 === 0 ? [array[0], ...paresDoArray(array.slice(1))] : paresDoArray(array.slice(1))
}


console.log(paresDoArray([1,2,3,4,5]));