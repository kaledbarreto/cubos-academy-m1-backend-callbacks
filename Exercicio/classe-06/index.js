const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

totalJogadores = jogadores.length;
let i = 0;

function imprimirJogadores(jogadores) {
  if (i === totalJogadores) {
    console.log('A rodada terminou!');
    clearInterval(intervalId);
  } else {
    console.log(jogadores[i]);
    i++;
  }
}

tempo = (10 / totalJogadores) * 1000;

imprimirJogadores(jogadores);
const intervalId = setInterval(imprimirJogadores, tempo, jogadores);