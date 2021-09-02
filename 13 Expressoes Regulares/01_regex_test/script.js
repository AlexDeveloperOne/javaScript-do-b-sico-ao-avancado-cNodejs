//aula 01
//let reg1 = new RegExp("test");
//let reg2 = /test/;

//aula 02

console.log(/testando/.test("ttttestandooooo"));
console.log(/testando/.test("asdtestasd"));
/////////////////////////////////////////////////////////////////////

const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

let text = 'Tem bola na cesta';

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("413134134quadrado1234341314324134"));