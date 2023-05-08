// function umOuOutro(boolean1, boolean2, boolean3) {
//     const arr = [boolean1, boolean2, boolean3]
//     let lastArr = arr.filter(el => el == true).length === 1 ?? false
//     return lastArr
//  }

//  console.log(umOuOutro(false, true, false))


function contaParesDoArray(array) {
    if (array.length === 0) return 0

    return array[0] % 2 === 0 ? 1 + contaParesDoArray(array.slice(1)) : contaParesDoArray(array.slice(1))
} 

console.log(contaParesDoArray([1,2,3,4,5,6]))