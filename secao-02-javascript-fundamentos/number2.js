// Alguns cuidados ao trabalhar com Number.

console.log(7 / 0); // Tipo infinity
console.log('10' / 2); // Javascript vai identificar que a String 10 é um número e irá realizar a divisão.
// console.log('10,2' / 2); Ocorre um erro.
console.log('Show!' * 2); // NaN
console.log(0.1 + 0.7); // Não será 0.8 devido especificação IEEE.
console.log((10.385).toFixed(2));