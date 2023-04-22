function calculaFaixaEtaria(idade){
    switch(true){
        case idade <= 11:
            return 'Criança';
            break;
        case idade <= 17:
            return 'Adolescente';
            break;
        case idade <= 64:
            return 'Adulto';
            break;
        case idade >= 65:
            return 'Sénior';
            break;
        
        
    }
}

console.log(calculaFaixaEtaria(17));