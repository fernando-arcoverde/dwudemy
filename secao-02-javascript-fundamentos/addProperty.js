const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
};

customer.lastName = 'Faria';
console.log(customer);

customer['lastName'] = 'Silva';
console.log(customer);


// Função de adicionar propriedades ao objeto.
const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined") {
        object[key] = value;
    }
};

addProperty(customer, 'bithPlace', 'Recife');
addProperty(customer, 'bithDate', '20/04/1985');
addProperty(customer, 'maritalStatus', 'Casado');
addProperty(customer, 'email', 'nando.arcoverde@gmail.com');
addProperty(customer, 'Fone', '81 999096574');

console.log(customer);