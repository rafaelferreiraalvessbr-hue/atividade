// Array de objetos representando carros
const carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2014 },
    { marca: "Honda", modelo: "Civic", ano: 2018 },
    { marca: "Chevrolet", modelo: "Onix", ano: 2016 },
    { marca: "Volkswagen", modelo: "Gol", ano: 2012 },
    { marca: "Ford", modelo: "Ka", ano: 2020 },
    { marca: "Fiat", modelo: "Uno", ano: 2015 }
];

// Estrutura de repetição para filtrar e exibir os carros fabricados após 2015
for (let i = 0; i < carros.length; i++) {
    if (carros[i].ano > 2015) {
        console.log(`${carros[i].marca} ${carros[i].modelo} (${carros[i].ano})`);
    }
}