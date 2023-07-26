// Armazendo uma função em uma variável.

const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(8, 5);

// Armazendo uma arrow function

const soma = (a, b) => {
    return a + b;
};

console.log(soma(8, 5));

// retorno implícito

const subtracao = (a, b) => a - b;

console.log(subtracao(8, 5));