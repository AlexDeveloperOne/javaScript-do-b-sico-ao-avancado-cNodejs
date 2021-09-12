let btn =  document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("Clicou em mim!");
});

//ocorreu um problema: 'html' foi criado depois que o 'js' foi chamado: é recomendado colocar o 'js' no final da tag 'BODY'