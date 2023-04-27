function diferencaEmDias(data1, data2) {
    let dia = 24 * 60 * 60 * 1000

    let dataUmEmMs = new Date(data1).valueOf()
    let dataDoisEmMs = new Date(data2).valueOf()

    return Math.trunc(Math.abs((dataUmEmMs - dataDoisEmMs)/dia))
}