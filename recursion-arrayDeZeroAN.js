// function arrayDeZeroAN(n) {
//     let arrayFinal = [];
//     let counter = 0;

//     if (arrayFinal.length <= n) {
//         arrayFinal.push(counter);
//         counter++;
//         arrayDeZeroAN(n);
//     }

//     return arrayFinal;
// }

function arrayDeZeroAN(n) {
    if(n === 0) return [0]
    return [n, ...arrayDeZeroAN(n - 1)]
}



function contaPares(array){
    
    
    
}



console.log(arrayDeZeroAN(4));
