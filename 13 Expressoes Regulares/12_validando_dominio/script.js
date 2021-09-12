const validandoDominio = /[?www.]\w+\.com.br|.com/; //www -> ficou opcional;
//const validandoDominio = /www.\w+\.com.br|.com/;

console.log(validandoDominio.test("www.google.com"));
console.log(validandoDominio.test("www.horadecodar.com.br"));
console.log(validandoDominio.test("www.horadecodar"));
console.log(validandoDominio.test("horadecodar.com.br"));