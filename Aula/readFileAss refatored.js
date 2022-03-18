const fs = require('fs'); //Aqui esta chamando uma "função" padrão do JS para ler um arquivo.

console.log("Vou começar a ler o arquivo.");

const buffer = fs.readFile('./texto.txt', (err, data) => {
  if (!err) {
    console.log(data.toString()); //Quando não der erro, vai mostrar o que estava no arquivo txt, através da variável data.
  }
}); //A função so vai ser executada quando eu terminar de ler o arquivo. (A função so vai ser executada quando o arquivo for lido.)

console.log("Opa!");

//OBS: Pela callback ser assíncrona, o código continua rodando mesmo enquanto a função esta lendo o arquivo txt, e somente quando ele terminar que ele vai voltar e "printar" o que estava no txt.