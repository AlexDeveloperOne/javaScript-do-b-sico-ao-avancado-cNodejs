let nome = "Alexandre";
let idade = 39;
let CNH = true;

if (idade >= 18 && CNH === true){
    console.log(`Voce pode digirir"`);
} else if (idade >= 18 && CNH === false){
    console.log(`Vocẽ precisa tirar a CNH!`);
} else if (idade < 18){
    console.log(`Você não tem idade para dirigir!`);
}