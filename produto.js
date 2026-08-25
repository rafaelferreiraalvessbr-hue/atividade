
const produto = {
    nome: "Notebook",
    preco: 3500.90,
    estoque: 12
};

for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}