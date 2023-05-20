function produtoExclusivo(array) {
  return array.map((n, i) => {
    return array.filter((el) => el != n).reduce((acc, c) => acc * c);
  });
}

console.log(produtoExclusivo([1, 3, 5, 6]));
