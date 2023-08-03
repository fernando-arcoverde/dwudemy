let lotteryNumbers = [];
let firstGame = [];

function genetateLotteryNumbers(quantity, maxNumber, array) {
    for (let index = 0; index < quantity; index += 1) {
        let randomNumber = Math.ceil(Math.random() * maxNumber);
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        } else {
            index -= 1;
        }
    }
}

genetateLotteryNumbers(6, 60, lotteryNumbers);
genetateLotteryNumbers(6, 60, firstGame);