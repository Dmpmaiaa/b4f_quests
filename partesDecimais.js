array = [
  28.047659475965926, 11.80528201985151, 10.97713993870363, 25.57061168422218,
  30.462567241569232, 20.756948444005268, 8.13736725943252, 10.095849455552887,
  24.580593633173923, 25.2029723494257, 22.12989283389489, 14.530704513423577,
  1.0,
];

function partesDecimais(array) {
  // escreve aqui a função

  return array.map((elemento) => {
    if (!Number.isInteger(elemento)) {
      return Number(Math.abs((elemento % 1)).toFixed(2))
    }
  });
}

console.log(partesDecimais(array));
