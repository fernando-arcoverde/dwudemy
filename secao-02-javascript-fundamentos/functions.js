// Com return.

function imprimirSoma(a, b) {
    const soma = a + b;

    return soma
};

console.log(imprimirSoma(4, 7));

// Sem return

function imprimirSoma2(a, b) {
    console.log(a + b);
}

imprimirSoma2(4, 7);

// Outra função com retorno

function soma(a, b = 1) {
    return a + b;
}

console.log(soma(4, 7));
console.log(soma(4));