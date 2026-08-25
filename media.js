// Vetor de 5 elementos inteiros
const vetor = [10, 20, 30, 40, 50];

let soma = 0;

// Estrutura de repetição para somar os elementos
for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}

// Cálculo da média
const media = soma / vetor.length;

// Mensagem ao usuário
console.log(`A média dos elementos do vetor é: ${media.toFixed(2)}`);