const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'amanda'];

nomesArray = nomes.filter((x, i) => {
  let nomeArr = nomes[i].split("");
  let primeiraLetra = nomeArr.shift();
  x = nomeArr.join("");
  x = primeiraLetra.concat(x);

  console.log(primeiraLetra);
  console.log(x);

  if (primeiraLetra === "A" || primeiraLetra === "a") {
    return x;
  }
});

console.log(nomesArray);