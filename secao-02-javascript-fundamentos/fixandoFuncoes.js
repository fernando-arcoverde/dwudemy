const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customer) {
    if (typeof customer != 'string') {
        return 'O parâmetro passado deve ser do tipo string';
    }

    trybeBankCustomers.push(customer);
    return 'Pessoa adicionada com sucesso!';

};

console.log(addCustomers('Fernando'));
console.log(trybeBankCustomers);