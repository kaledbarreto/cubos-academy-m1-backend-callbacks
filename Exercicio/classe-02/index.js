const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

// const buscaCep = 00222444;

function buscarCep(cep, enderecos) {
    const ruaEncontrada = enderecos.find(x => x.cep === cep);
    console.log(ruaEncontrada.rua);
}

buscarCep(00222444, enderecos);