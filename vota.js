let nome = "Rafael";
let idade = "16";

function podeVotar(nome, idade) {
    if (idade >= 16) {
        console.log(`${nome}, pode votar`);
    } else {
        console.log(`${nome}, nao pode votar`);
    }
}

podeVotar(nome, idade);