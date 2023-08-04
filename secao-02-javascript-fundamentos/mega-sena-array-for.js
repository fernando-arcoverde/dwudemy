let lotteryNumbers = [];
let firstGame = [12, 47, 48, 52, 8, 1];

for (let index = 0; index < 6; index += 1) {
  lotteryNumbers.push(Math.ceil(Math.random() * 60));
}

console.log(lotteryNumbers);
console.log(firstGame);