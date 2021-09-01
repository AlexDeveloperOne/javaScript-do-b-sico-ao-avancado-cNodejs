class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}
//www.caniuse.com/      --> mostrar a compatibilidade com ES6 e navegadores
let labrador  = new Cachorro ('Labrador', 4, 'Amarelo');

console.log(labrador);