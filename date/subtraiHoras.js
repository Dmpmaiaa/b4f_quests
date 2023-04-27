function subtraiHoras(data, horas) {
    let hora = 60 * 60 * 1000
    return new Date(data.valueOf() - hora * horas)
}