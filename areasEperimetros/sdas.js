function arrayFromBigInt(num){
    const novaArray = String(num).split('')
    return Number(novaArray.join(''))
}

console.log(arrayFromBigInt(1245n))