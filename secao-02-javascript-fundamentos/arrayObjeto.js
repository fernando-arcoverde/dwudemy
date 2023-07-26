const residents = [
    {
        name: 'Luíza',
        lastName: 'Guimarães',
        floor: 10,
        apartment: 1005,
    },
    {
        name: 'William',
        lastName: 'Albuquerque',
        floor: 5,
        apartment: 502,
    },
    {
        name: 'Murilo',
        lastName: 'Ferraz',
        floor: 8,
        apartment: 804,
    },
    {
        name: 'Zoey',
        lastName: 'Brooks',
        floor: 1,
        apartment: 101,
    },
];

console.log(residents[0]);

const firstResident = residents[0];

console.log(`O andar que ${firstResident.name} mora é o ${firstResident.floor}.`);

// Como descobrir o último residente do array

const lastResident = residents[residents.length - 1]; // É como se o resultado fosse residents[3].

console.log(lastResident);

// Fazendo loop dos nomes dos residentes.

for (let index = 0; index < residents.length; index += 1) {
    const resident = residents[index];
    console.log(resident.name);
};
