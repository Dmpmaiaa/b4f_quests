
function arrayDeNAZero(n){
    if (n === 0) {
        return [0]
    }
   
   return [n, ...arrayDeNAZero(n - 1)]
 }



