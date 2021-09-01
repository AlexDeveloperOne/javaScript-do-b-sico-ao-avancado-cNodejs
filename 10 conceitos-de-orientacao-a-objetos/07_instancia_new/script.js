/**
 * Esta função de construtor pode ser convertida em uma declaração de classe.ts(80002)
 * function Cachorro(raca: any, patas: any, cor: any): void
 **/

function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;    
    this.cor = cor;
    this.uivar = function () {
        console.log('Auuuuuu');
    }
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();