const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Apenas os maiores que 5.

const arrayFiltrado = array.filter((x, index, array) => { //Vai rodar essa função a cada índice do array. (Retorna True or False). Tem como ter 3 parâmetros, X(número do array), index(index do array), array(É literalmente o array que estamos filtrando.)
  if (x > 5) {
    return true; //Toda vez que for true, ele adiciona ao arrayFiltrado.
  } else {
    return false; //Toda vez que for false, ele NÃO adiciona nada.
  }
});

console.log(arrayFiltrado);