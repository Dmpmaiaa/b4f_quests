function dataPorExtenso(data){
    console.log('oi')
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    
    const dia = data.getDate()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    const diaSemana = data.getDay()

    return `${diasDaSemana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}` 
}

console.log(dataPorExtenso(new Date()))