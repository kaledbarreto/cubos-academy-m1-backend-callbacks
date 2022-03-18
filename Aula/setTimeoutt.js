const imprimirMensagem = (mensagem) => {
  console.log(mensagem);
};

setTimeout(imprimirMensagem, 3000, "Olá"); //É assim que se passa argumentos para a função que esta dentro de setTimeout, você passa eles do lado.

console.log("Começou o programa");
console.log("Processando algumas coisas....");