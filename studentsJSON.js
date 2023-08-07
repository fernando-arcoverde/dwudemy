const randomIndex = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const students = {
    studentsInfo: [
        {
            nome: "Ana Silva",
            email: "ana@example.com",
            endereco: "Rua A, 123",
            turma: "Turma A",
            nota: randomIndex(0, 100)
        },
        {
            nome: "João Santos",
            email: "joao@example.com",
            endereco: "Rua B, 456",
            turma: "Turma B",
            nota: randomIndex(0, 100)
        },
        {
            nome: "Maria Oliveira",
            email: "maria@example.com",
            endereco: "Rua C, 789",
            turma: "Turma A",
            nota: randomIndex(0, 100)
        },
        {
            nome: "Pedro Almeida",
            email: "pedro@example.com",
            endereco: "Rua D, 101",
            turma: "Turma C",
            nota: randomIndex(0, 100)
        },
        {
            nome: "Isabela Rodrigues",
            email: "isabela@example.com",
            endereco: "Rua E, 111",
            turma: "Turma B",
            nota: randomIndex(0, 100)
        },
        {
            nome: "Lucas Oliveira",
            email: "lucas@example.com",
            endereco: "Rua F, 222",
            turma: "Turma A",
            nota: randomIndex(0, 100)
        },
        {
            nome: "Mariana Souza",
            email: "mariana@example.com",
            endereco: "Rua G, 333",
            turma: "Turma C",
            nota: randomIndex(0, 100)
        },
        {
            nome: "Matheus Santos",
            email: "matheus@example.com",
            endereco: "Rua H, 444",
            turma: "Turma B",
            nota: randomIndex(0, 100)
        },
        {
            nome: "Lara Ferreira",
            email: "lara@example.com",
            endereco: "Rua I, 555",
            turma: "Turma A",
            nota: randomIndex(0, 100)
        },
        {
            nome: "Rafaela Lima",
            email: "rafaela@example.com",
            endereco: "Rua J, 666",
            turma: "Turma C",
            nota: randomIndex(0, 100)
        }
    ]
};

console.log(students);
