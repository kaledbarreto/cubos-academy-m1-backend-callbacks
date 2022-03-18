const fs = require('fs');

const text = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("./classe-07/novoArquivo.txt", text, () => {
  console.log("Arquivo Escrito!");
});