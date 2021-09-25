function decrementaImprime (numero) {
    while(numero > 1){

        if (numero % 2 === 0) {
            console.log(numero);
        }
        numero--;
    }
    console.log("fim do laço...")
}

decrementaImprime(10);

decrementaImprime(25);

decrementaImprime(33);