function adicionaSemanas(data, semanas) {
    let semana = 7 * 24 * 60 * 60 * 1000
    return new Date(data.valueOf() + semana * semanas)
}