var num = 10, divisor = 0;

for (var i = 0 ; i < num ; i++){
    if (i > 1){
        if (num % i == 0){
            divisor++;
        }
    }
}
console.log(`Quantidade de divisores --> ${divisor}`);

if (divisor == 0){
    console.log(`${num} é um numero primo!!`)
} else {
    console.log(`${num} não é um número primo!`)
}