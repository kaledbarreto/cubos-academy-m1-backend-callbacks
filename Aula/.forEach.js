const array = [1, 2, 3, 4, 5];

//Como o forEach não retorna nada, não pode usar funções encadeadas.
array.forEach((x, i, a) => {
  console.log(`O elemento ${x} está no índice ${i} do array ${a}`);
})