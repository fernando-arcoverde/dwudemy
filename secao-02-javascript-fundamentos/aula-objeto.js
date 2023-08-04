const macDonalds = {
    bigMac: 26.60,
    bigTasty: 39.90,
    mcFritasMedia: 13.90,
    topSundayChocolate: 11.90,
    isDelicious: true,
    city: 'Curitiba',
    unit: 'Park Shopping Barigui',
}

macDonalds.bigMac = 78.75; // Dot notation
macDonalds['bigMac'] = 178.99; // Brackets notation
macDonalds.state = 'Paraná'

console.log(Object.keys(macDonalds)); // Acessa apenas as chaves com saída de array
console.log(Object.values(macDonalds)); // Acessa os valores das chaves com saída de array
console.log(Object.entries(macDonalds)); // Acessa chave e valorcom saída de array

const cloneMacDonalds = Object.assign({}, macDonalds); // Cria uma cópia de um objeto qualquer

console.log(macDonalds);
console.log(macDonalds.bigMac);
console.log(cloneMacDonalds);