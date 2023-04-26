function combineArrays(array1, array2) {
    let arrayToReturn = [];
    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        if (array1[i] && array2[i]) {
            arrayToReturn.push(array1[i]);
            arrayToReturn.push(array2[i]);
        } else if (array1[i] === undefined) {
            arrayToReturn.push(array2[i]);
        } else if (array2[i] === undefined) 
            console.log(array1[i])
            arrayToReturn.push(array1[i]);
        }
        return arrayToReturn;
    }


console.log(combineArrays(["a", "b", "c"], [1]));
