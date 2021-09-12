const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 asd"));
console.log(nottoaz.test("asfasdfasdfewrqerqrqrq"));


const az = /[a-z]/;

console.log(az.test("123 asd"));
console.log(az.test("asfasdfasdfewrqerqrqrq"));

