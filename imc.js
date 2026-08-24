
let peso = 70;
let altura = 1.75;

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc >= 18.5 && imc <= 24.9) {
        return "Seu IMC é " + imc.toFixed(2) + ". Você está com seu IMC ideal.";
    } else {
        return "Seu IMC é " + imc.toFixed(2) + ". Você precisa se cuidar.";
    }
}

console.log(calcularIMC(peso, altura));