// Sorteio dos Números
let lotteryNumbers = [];
let firstGame = [12, 47, 48, 52, 8, 1];

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.ceil(Math.random() * 60);
  if (!lotteryNumbers.includes(randomNumber)) {
    lotteryNumbers.push(randomNumber);
  } else {
    index -= 1;
  }
};

// Comparação do Sorteio com o meu jogo
let numberOfHits = 0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
    if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
        numberOfHits += 1;
        hits.push(lotteryNumbers[indexLottery]);
    }
  };
};

console.log(`A mega sena sorteou os seguintes números: ${lotteryNumbers}. 
O seu jogo foi ${firstGame}. 
Você acertou ${numberOfHits} número(s).
${hits}`);