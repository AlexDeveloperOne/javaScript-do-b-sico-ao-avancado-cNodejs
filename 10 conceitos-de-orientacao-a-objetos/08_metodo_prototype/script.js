function Cachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log('Auuu');
}

Cachorro.prototype.latir = function() {
    console.log("Au au");
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();

husky.latir();