function paresDeZeroAN(n) {
  if (n === 0) {
    return [0];
  }

  if (n < 0) {
    return "Por favor insira um número superior a 0.";
  } else if (n % 2 === 0) {
    return [...paresDeZeroAN(n - 2), n];
  } else {
    return paresDeZeroAN(n - 1);
  }
}

console.log(paresDeZeroAN(5));
