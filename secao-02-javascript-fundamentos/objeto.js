const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// Modos de acessar objeto. DOT NOTATION E BRACKET NOTATION.

const car = {
    brand: 'Fiat',
    model: '500',
    color: 'White',
    weigth: 1061,
};

console.log(car.brand); // dot
console.log(car['brand']); // bracket

const account = {
    agency: '0975',
    bank: {
        cod: '012',
        id: 4,
        name: 'TrybeBank',
    },
};

console.log(account.bank); // dot
console.log(account['bank']); // bracket
console.log(account.bank.name); // dot
console.log(account['bank']['name']); // bracket

const user = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    info: {
      name: 'Jake',
      lastName: 'Peralta',
      address: {
        street: 'Rua Dalvo Trombeta, 357 - Fundos',
        district: 'Xererê',
        city: 'Santana do Livramento',
        state: 'Rio Grande do Norte',
      },
    },
  };
  
  console.log(user['id']); // 99
  
  console.log(user.email); // jakeperalta@gmail.com
  
  console.log(user.info.address.street); // Rua Dalvo Trombeta, 357 - Fundos
  
  console.log(user['info']['address']['city']); // Santana do Livramento