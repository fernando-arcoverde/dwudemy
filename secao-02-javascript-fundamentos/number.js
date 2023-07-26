const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.456

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media);
console.log(media.toFixed(2)); // to.Fixed() define quantas casa decimais deve aparecer no número.
console.log(media.toFixed(1));
console.log(media.toFixed(2).toString()); // to.String() transforma o valor tipo Number em String.
console.log(typeof media.toString());