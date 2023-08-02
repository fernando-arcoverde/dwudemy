console.log(Math.ceil(7.2));

const obj1 = {}; // Originalmente a constante obj1 é um objeto vazio.

obj1.name = 'Bola'; // Aqui o objeto vazio foi populado

console.log(obj1.name);

obj1['name'] = 'Bola2'; // Aqui a propriedade name que tem o valor bola foi substituido o valor para bola2.

console.log(obj1.name);

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()