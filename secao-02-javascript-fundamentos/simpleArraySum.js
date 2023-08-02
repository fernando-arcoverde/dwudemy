function simpleArraySum (array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    };
    return sum;
}

console.log(simpleArraySum([22, 85, 151, 102]));