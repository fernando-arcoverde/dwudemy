/* 
Exercício 1
Crie uma variável chamada player e atribua a ela um objeto que reúna 
todas as informações das variáveis listadas.

const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

*/

const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log(player);

/*
Exercício 2
Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, 
concatene as informações e armazene na variável message no seguinte formato: 
“A jogadora Marta Silva tem 34 anos de idade”.
*/

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);

const achievements = player['bestInTheWorld'];

console.log(achievements);

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${achievements.length} vezes.`);