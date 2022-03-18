const pessoas = [
  {
    nome: "José",
    idade: 30,
    altura: 173,
  },
  {
    nome: "Pedro",
    idade: 12,
    altura: 144,
  },
  {
    nome: "Maria",
    idade: 38,
    altura: 156,
  }
];

const pessoasTransf = pessoas.map(x =>
({
  nome: x.nome,
  idade: `${x.idade} anos`,
  altura: `${x.altura / 100}m`,
  maioridade: (x.idade >= 18 ? "É maior de Idade" : "É menor de idade")
}));

console.log(pessoasTransf);