function biggestSmallerNumber(array) {
    let bigger = array[0];
    let smaller = array[0];

    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > bigger) {
            bigger = array[index];
        } else if (array[index] < smaller) {
            smaller = array[index];
        };
    };
    
    return `O maior número é ${bigger} e o menor número é ${smaller}.`
};

console.log(biggestSmallerNumber([3, 2, 5, 6, 9, 4]));