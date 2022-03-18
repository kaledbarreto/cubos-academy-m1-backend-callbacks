const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasInfo = frutas.map((x, i) => {
  x = x.toUpperCase();
  let frutaArray = frutas[i].split("");
  let primeiraLetra = frutaArray.shift();
  x = frutaArray.join("");
  x = x.toLowerCase();

  primeiraLetra = primeiraLetra.toUpperCase();
  x = primeiraLetra.concat(x);

  const indice = `${i} - `;
  x = indice.concat(x);

  return x;
});

console.log(frutasInfo);