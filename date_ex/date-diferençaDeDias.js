// function diferencaEmDias(data1, data2) {
//     return new Date(data1).valueOf()
// }


/* function diferencaEmDias(data1, data2) {
    let dia = 24 * 60 * 60 * 1000
    let dataUmEmMs = new Date(data1)
    let dataDoisEmMs = new Date(data2)
    console.log((dataUmEmMs.valueOf() / dia) - (dataDoisEmMs.valueOf() / dia))
   // return Math.abs(dataUmEmMs.valueOf() - dataDoisEmMs.valueOf())
        
}
 */


function diferencaEmDias(data1, data2) {
    let dia = 24 * 60 * 60 * 1000

    let dataUmEmMs = new Date(data1).valueOf()
    let dataDoisEmMs = new Date(data2).valueOf()
    console.log(dataUmEmMs, dataDoisEmMs)
    return Math.abs((dataUmEmMs / dia) - (dataDoisEmMs / dia))
        
}
console.log(
    diferencaEmDias(
        "Wed Jul 08 1987 12:25:33 GMT+0200 (Central European Summer Time)",
        "Fri Apr 15 1994 00:11:18 GMT+0200 (Central European Summer Time)"
    )
);
