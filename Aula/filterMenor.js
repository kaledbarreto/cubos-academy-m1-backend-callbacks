const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Apenas os maiores que 5.

const arrayFiltrado = array.filter(x => x > 5).filter(x => x % 2 === 0);

console.log(arrayFiltrado);

//Já que vai retornar true ou false mesmo, utilizar somente a condicional "X > 5" já vai retornar também;
//Como so ta passando 1 argumento, os "()" do x podem ser ocultados.
//Como o código ta pequenininho, no caso de 1 linha, pode remover as chaves "{}" e o "return", reduzindo mais ainda o código.
//Pode filtrar 2 vezes também, apenas colocando o .filter e continuando.


