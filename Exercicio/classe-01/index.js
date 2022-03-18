const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const cidadesFiltradas = cidades.filter(x => x.length <= 8);

const cidadesNovas = cidadesFiltradas.join(", ");

console.log(cidadesNovas);