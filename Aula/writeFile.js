const fs = require('fs'); //Método padrão para requerer algum código.

const erro = "Erro 404";

fs.writeFile("./novoArquivo.txt", erro, () => { //O callback vai avisar quando a função terminar de escrever (Rodando o código dentro das {})
  console.log("O Arquivo já foi escrito");
});

