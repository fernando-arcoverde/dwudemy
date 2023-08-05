const menu = {
    sanduiches: [
        {
            nome: "Hambúrguer Clássico",
            preco: 10.99,
            ingredientes: ["pão de hambúrguer", "carne bovina", "queijo cheddar", "alface", "tomate", "molho especial"],
            calorias: 550
        },
        {
            nome: "Sanduíche de Frango Grelhado",
            preco: 9.99,
            ingredientes: ["pão de hambúrguer", "peito de frango grelhado", "queijo suíço", "cebola roxa", "maionese"],
            calorias: 420
        },
        {
            nome: "Sanduíche Vegetariano",
            preco: 8.99,
            ingredientes: ["pão de hambúrguer", "hambúrguer de grão-de-bico", "queijo suíço", "alface", "molho de iogurte"],
            calorias: 380
        },
        {
            nome: "Sanduíche de Peixe",
            preco: 11.49,
            ingredientes: ["pão de hambúrguer", "filé de peixe empanado", "alface", "tomate", "molho tártaro"],
            calorias: 450
        },
        {
            nome: "Wrap de Frango",
            preco: 9.79,
            ingredientes: ["tortilha de trigo", "peito de frango grelhado", "queijo cheddar", "alface", "molho de alho"],
            calorias: 390
        },
        {
            nome: "Sanduíche de Carne de Porco",
            preco: 10.49,
            ingredientes: ["pão de hambúrguer", "carne de porco desfiada", "molho barbecue", "cebola roxa", "picles"],
            calorias: 520
        }
    ],
    bebidas: [
        {
            nome: "Refrigerante Cola",
            preco: 2.49,
            ingredientes: ["água gaseificada", "açúcar", "corante", "aromatizantes"],
            calorias: 150
        },
        {
            nome: "Suco Natural de Laranja",
            preco: 3.99,
            ingredientes: ["laranjas frescas"],
            calorias: 120
        },
        {
            nome: "Chá Gelado",
            preco: 2.99,
            ingredientes: ["chá preto", "gelo", "limão"],
            calorias: 10
        },
        {
            nome: "Café Expresso",
            preco: 2.29,
            ingredientes: ["café moído", "água quente"],
            calorias: 5
        },
        {
            nome: "Smoothie de Frutas",
            preco: 4.49,
            ingredientes: ["banana", "morango", "iogurte", "mel"],
            calorias: 180
        },
        {
            nome: "Água Mineral",
            preco: 1.19,
            ingredientes: ["água purificada"],
            calorias: 0
        }
    ],
    sobremesas: [
        {
            nome: "Sundae de Chocolate",
            preco: 4.79,
            ingredientes: ["sorvete de baunilha", "calda de chocolate", "chantilly", "nozes picadas"],
            calorias: 320
        },
        {
            nome: "Torta de Maçã",
            preco: 5.99,
            ingredientes: ["massa folhada", "maçãs", "açúcar", "canela"],
            calorias: 280
        },
        {
            nome: "Mousse de Morango",
            preco: 3.49,
            ingredientes: ["morangos", "creme de leite", "açúcar"],
            calorias: 200
        },
        {
            nome: "Cheesecake",
            preco: 6.29,
            ingredientes: ["massa de biscoito", "cream cheese", "açúcar", "baunilha"],
            calorias: 400
        },
        {
            nome: "Brownie",
            preco: 4.99,
            ingredientes: ["chocolate amargo", "manteiga", "açúcar", "ovos", "farinha"],
            calorias: 350
        },
        {
            nome: "Sorvete de Baunilha",
            preco: 3.19,
            ingredientes: ["sorvete de baunilha"],
            calorias: 200
        }
    ]
};

const newItem = {
    nome: "X-Infarto",
    preco: 59.90,
    ingredientes: ["Pão Bola Gigante", "8 Hambúrgueres", "10 Tiras de Bacon", "8 Ovos", "6 Salcichas",
     "Queijo Cheddar", "Queijo Catypiry", "Calabresa", "Cebola", "Azeitona", "Alface", "Tomate"],
    calorias: 7800,
}

menu.sanduiches.push(newItem);

console.log(menu.sanduiches);