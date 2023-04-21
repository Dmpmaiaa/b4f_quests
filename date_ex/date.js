function mesPorExtenso(data){
    const months = ['janeiro', 'fevereiro', 'março','abril','maio','junho','julho','agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return months[data.getMonth()]
} 

console.log(mesPorExtenso(new Date(2022,03,04)))