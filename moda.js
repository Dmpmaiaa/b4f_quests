const numbersArray = [4, 4, 1, 2, 3];

function calculaModa(array) {
  const mapa = array.reduce((mapaDeOcorrencias, elemento) => {
    if (mapaDeOcorrencias.has(elemento)) {
      return new Map([
        ...mapaDeOcorrencias,
        [elemento, mapaDeOcorrencias.get(elemento) + 1],
      ]);
    } else {
      return new Map([...mapaDeOcorrencias, [elemento, 1]]);
    }
  }, new Map([]));


  

  mapa.forEach(el => console.log(el.keys()))

}



console.log(calculaModa(numbersArray));



