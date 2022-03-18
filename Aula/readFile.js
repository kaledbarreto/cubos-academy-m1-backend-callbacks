const fs = require('fs'); //Aqui esta chamando uma "função" padrão do JS para ler um arquivo.

const buffer = fs.readFileSync('./texto.txt'); //ReadFile Síncrono(Dependendo do tamanho do arquivo pode deixar o servidor mais lento), ai lê o arquivo solicitado e guarda num buffer.

console.log(buffer.toString());