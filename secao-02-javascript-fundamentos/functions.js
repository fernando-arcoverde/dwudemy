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

// Outro Exemplo

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function greetCustomer(customer) {
  return `Olá, ${customer}. Essa é sua conta do TrybeBank.`;
};

console.log(greetCustomer(trybeBankCustomers[0])); // Olá, Oliva,Nat,Gus. Essa é sua conta do TrybeBank.

// Função com loop for

const trybeBankCustomers2 = ['Oliva', 'Nat', 'Gus'];

function greetCustomer(customer) {
  for (let index = 0; index < customer.length; index += 1) {
    console.log(`Olá, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  }
};

greetCustomer(trybeBankCustomers2);

// ... exemplos

const trybeBankCustomers3 = ['Oliva', 'Nat', 'Gus'];
const pirilamposCustomers = ['Oliva', 'Nat', 'Gus'];

function findElement(array, element) {
    return array.includes(element);
}

console.log(findElement(trybeBankCustomers3, 'Oliva'));