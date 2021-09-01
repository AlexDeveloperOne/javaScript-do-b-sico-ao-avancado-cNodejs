let pessoa = {
    nome: "Matheus"
}

let pessoa2 = pessoa;
//Os objetos ficam referenciados 'PONTEIRO';

let pessoa3 = {
    nome: "Matheus"
}

console.log(pessoa == pessoa2); //true
console.log(pessoa3 == pessoa); //false
console.log(pessoa3 == pessoa2); //false

pessoa2['nome'] = "pedro";

console.log(pessoa['nome']);

pessoa['nome'] = "maria";

console.log(pessoa2['nome']);