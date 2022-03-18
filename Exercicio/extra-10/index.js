const notas = [6, 8, 9, 8];

let newNotas = [];

notas.forEach(x => {
  if (notas.find((x) => !newNotas.includes(x))) {
    newNotas.push(x);
  }
});

console.log(newNotas);