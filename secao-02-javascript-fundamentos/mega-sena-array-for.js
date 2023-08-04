// Sorteio dos Números
let lotteryNumbers = [];
let firstGame = [12, 47, 48, 52, 8, 1];

for (let index = 0; index < 6; index += 1) {
  lotteryNumbers.push(Math.ceil(Math.random() * 60));
}

// Comparação do Sorteio com o meu jogo
let numberOfHits = 0;

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
    if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
        numberOfHits += 1;
    }
  };
};

console.log(`A mega sena sorteou os seguintes números: ${lotteryNumbers}. 
O seu jogo foi ${firstGame}. 
Você acertou ${numberOfHits} número(s).`);