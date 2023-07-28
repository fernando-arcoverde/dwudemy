// RETORNAR A SOMA DE TODOS OS ELEMENTOS DO ARRAY
// function sumArray(array) {
//     let sum = 0;
//     for (let index = 0; index < array.length; index += 1) {
//         sum = sum + array[index];
//     };
//     return sum;
// }
// console.log(sumArray([10, 20, 30, 58, 158, 566]));
// console.log(sumArray([10, 20, 30, 58, 158, 566, 1050]));
// TRANSFORMANDO EM ARROW FUNCTION

const sumArray = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index += 1) {
        sum = sum + array[index];
    };
    return sum;
};

console.log(sumArray([10, 20, 30, 58, 158, 566]));
console.log(sumArray([10, 20, 30, 58, 158, 566, 1050]));