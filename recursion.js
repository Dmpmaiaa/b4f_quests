let arrayFinal = [];
let counter = 0;

function arrayDeZeroAN(n) {
    
    if (arrayFinal.length <= n) {
            arrayFinal.push(counter);
            counter++;
            arrayDeZeroAN(n);
        }

        
        return arrayFinal;
    }

console.log(arrayDeZeroAN(4));


