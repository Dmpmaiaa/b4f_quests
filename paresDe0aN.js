let numPares = []
let counter = 0
function paresDeZeroAN(n){
    if(counter <= n){
        counter % 2 === 0 ? numPares.push(counter) : 0
        counter++
        paresDeZeroAN(n)
    }
        return numPares
}

console.log(paresDeZeroAN(4))