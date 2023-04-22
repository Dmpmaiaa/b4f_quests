const numbersArray = [
  787, 938, 694, 503, 611, 456, 294, 220, 863, 470, 869, 732, 3, 705, 812, 776,
  991, 338, 480, 691, 154, 127, 440, 79, 79, 736, 214, 807, 953, 3, 703, 655,
  233, 303, 181, 931, 730, 971, 708, 458, 974, 902, 409, 104, 910, 658, 248,
  406, 67, 637, 37, 268, 969, 857, 122, 115, 891, 732, 562, 644, 825, 162, 999,
  561, 520, 266, 419, 961, 811, 283, 942, 745, 788, 284, 123, 893, 618, 254,
  100, 183, 531, 419, 823, 871, 241, 275,
];

function calculaModa(array) {
  let maxFre = 0;
  let ocurrences = [];
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

  for (let key of mapa.keys()) {
    if (mapa.get(key) > maxFre) {
      ocurrences = [];
      maxFre = mapa.get(key);
      ocurrences.push(key);
    } else if (mapa.get(key) === maxFre) {
      ocurrences.push(key);
    }
  }

  return Math.min(...ocurrences);

}

console.log(calculaModa(numbersArray));
