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
    return [...arrayDeZeroAN(n - 1), n]
}

[ f(3)     ,4]
[ 0, 1, 2,3]
[ 0, 1,2]
[  0,1]

console.log(arrayDeZeroAN(4));
