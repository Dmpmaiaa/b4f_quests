function diaDaSemanaPorExtensoBilingue(data, lingua){
    // escreve aqui a função
    let dia = data.getDay()
    console.log(dia)
    console.log(lingua)

    let diasPt = {
        0: "segunda-feira",
        1: "terça-feira",
        2: "quarta-feira",
        3: "quinta-feira",
        4: "sexta-feira",
        5: "sábado",
        6: "domingo"
    }

    let diasEn = {
        0: "monday",
        1: "tuesday",
        2: "wednesday",
        3: "thursday",
        4: "friday",
        5: "saturday",
        6: "sunday"
    }

    console.log(diasEn[dia])
    console.log(diasPt[dia])

    if(lingua === "pt"){
        return diasPt[dia]
    }
    if(lingua === "en"){
    return diasEn[dia]
    }
    else{
        
    }
}


console.log()