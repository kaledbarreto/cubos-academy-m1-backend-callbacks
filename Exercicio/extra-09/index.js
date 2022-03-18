const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const filtradoProgramadores = pessoas.filter(x => x.idade > 20 && x.profissao === "Programador");

console.log("Programadores maiores de 20 anos");
console.log(filtradoProgramadores);

console.log("\n");

const filtradoJornalistas = pessoas.filter(x => x.idade > 30 && x.profissao === "Jornalista");

console.log("Jornalistas maiores de 30 anos");
console.log(filtradoJornalistas);

console.log("\n");

const filtradoJornalistasProgramadores = pessoas.filter(x => x.idade <= 29 && x.profissao === "Jornalista" || x.idade <= 29 && x.profissao === "Programador");

console.log("Jornalistas e Programadores jovens.");
console.log(filtradoJornalistasProgramadores);