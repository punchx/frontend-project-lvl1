import getRandomNumber from './getRandomNumber.js';
import calc from './calc.js';
import question from './question.js';
import game from './game.js';

const operations = ['+', '-', '*'];

function cliCalc() {
  game(() => {
    const number1 = getRandomNumber(100);
    const number2 = getRandomNumber(100);
    const op = operations[getRandomNumber(100) % operations.length];
    const correctAnswer = calc(number1, number2, op);
    question(`${number1} ${op} ${number2}`).check(String(correctAnswer));
  });
}

export default cliCalc;
