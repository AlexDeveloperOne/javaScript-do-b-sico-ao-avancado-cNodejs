//const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarDataNasc.test('05/02/2000'));
console.log(validarDataNasc.test('5/2/2000'));
console.log(validarDataNasc.test('05-02-2000'));
console.log(validarDataNasc.test('05-02-00'));
console.log(validarDataNasc.test('12/02/1999'));
console.log(validarDataNasc.test('99/99/9999'));
console.log(validarDataNasc.test('31/02/2010'));