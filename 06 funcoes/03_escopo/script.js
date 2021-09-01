//Observando o escoro
let y = 10;

function imprimir(){
    let y = 150;
    console.log("na função: " + y);
}

imprimir();

console.log("This is global: " + y);

console.log("fim do primeiro exemplo!!");
// let y = 50; //dá erro!


//outro exemplo #########
let n = 88;

const numero = function() {
    let n = 25;
    console.log(n);
}
numero();
console.log("Global; " + n);