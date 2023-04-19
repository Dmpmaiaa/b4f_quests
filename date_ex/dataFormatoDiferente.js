function formataData(data){
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    dia < 10 ? dia = '0' + dia : dia
    mes < 10 ? mes = '0' + mes : mes
    return `${mes}-${dia}-${ano}`
} 


console.log(formataData(new Date('Tue Mar 13 1990 07:25:25 GMT+0100 (Central European Standard Time')));