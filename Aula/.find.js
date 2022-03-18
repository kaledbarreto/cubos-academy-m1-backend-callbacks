const array = ["Zubumafu", "Paralelepipedo", "Pseudopistomaniaco"];

const found = array.find((x) => x.length > 10);

if (found) {
  console.log(`A palavra com mais de 10 caracteres é ${found}`);
} else {
  console.log(`Nenhum item com mais de 10 caracteres encontrado.`);
}