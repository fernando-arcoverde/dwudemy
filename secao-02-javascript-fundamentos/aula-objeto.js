const macDonalds = {
    bigMac: 26.60,
    bigTasty: 39.90,
    mcFritasMedia: 13.90,
    topSundayChocolate: 11.90,
    isDelicious: true,
    city: 'Curitiba',
    unit: 'Park Shopping Barigui',
}

macDonalds.bigMac = 78.75;
macDonalds['bigMac'] = 178.99;

console.log(macDonalds);
console.log(macDonalds.bigMac);