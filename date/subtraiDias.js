function subtraiDias(data, dias) {
     let diasASubtrair = dias * 24 * 60 * 60 * 1000
     return new Date(data.valueOf() - diasASubtrair)
 }