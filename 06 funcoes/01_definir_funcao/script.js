let nome = 'Alexandre';
document.write(`Está tudo dando certo ${nome}`);
//sem argumentos
function imprimirNoConsole () {
    console.log("Olá Mundo");
}

imprimirNoConsole();

//com argumentos
function imprimirUmNumero (num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);
//anônima
const numeroAletorio = function () {
    console.log (Math.random());
}

numeroAletorio();
numeroAletorio();