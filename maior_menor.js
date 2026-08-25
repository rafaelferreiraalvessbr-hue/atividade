// Vetor de 5 elementos inteiros
const vetor = [23, 8, 47, 15, 4];

// Inicializa maior e menor com o primeiro elemento do vetor
let maior = vetor[0];
let menor = vetor[0];

// Estrutura de repetição para percorrer o vetor
for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
    if (vetor[i] < menor) {
        menor = vetor[i];
    }
}

// Mensagem ao usuário
console.log(`O maior valor do vetor é: ${maior}`);
console.log(`O menor valor do vetor é: ${menor}`);