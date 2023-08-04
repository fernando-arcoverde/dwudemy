let lotteryNumbers = [];

for (let index = 0; index < 6; index += 1) {
  lotteryNumbers.push(Math.ceil(Math.random() * 60));
}

console.log(lotteryNumbers);