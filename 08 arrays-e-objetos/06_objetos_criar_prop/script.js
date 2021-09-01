let pessoa = {
    nome: "Matheus",
    idade: 29,
    profissao: "Developer"
};

console.log(pessoa['nome']);
delete pessoa['nome']; // deletando propriedades;
console.log(pessoa['nome']);

console.log(pessoa);
pessoa['casada'] = false; // adicionando propriedades;
console.log(pessoa['casada']);

/* A mais utilizada é a adição de 'propriedade' */