function changeWord(string){

    let newArray = [...string]
    let newString = ''
    
    newString = newArray.map(x => {
        switch(x){
            case 'a':
            case 'A':
                 return x = 4
                break;
                
            case 'e':
            case 'E':
                   return x  = 3
                break;
                
            case 'i':
            case 'I':
                   return x = 1
                break;
                
            case 'o':
            case 'O':
                 return x = 0
                break;
                
            case 's':
            case 'S':
                return x = 5
                break;
            default: 
                return x = x
        }
    })

    return newString.join('')
    
}

console.log(changeWord('Eu sou um hacker'))