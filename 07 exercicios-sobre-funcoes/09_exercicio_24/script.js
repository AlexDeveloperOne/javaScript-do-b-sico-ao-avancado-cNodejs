function potenciaFunction (x,y) {
    var cont = 1;
    const POTENCIA = x;

    while (cont < y) {
        x = x * POTENCIA;
        cont++;
    }
    //não utilizei Math.pow() ou 'x ** y'; -> para aumentar o desafio;
    return console.log(x)
}

potenciaFunction(2,2);
potenciaFunction(3,2);
potenciaFunction(4,4);