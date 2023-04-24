let evoqueArray = ['e','v','o','q','u','e'];


const evoqueToString = (array) =>{
    return array.reduce((palavra, letra) => {
       return palavra + letra
    }, "")

}

//sconsole.log(evoqueArray.join(''));


const evoqueRecursion = (array) =>{
    
  if (array.length === 0) {return ""}

  return array[0] + evoqueRecursion(array.splice(1))

}

console.log(evoqueRecursion(evoqueArray));