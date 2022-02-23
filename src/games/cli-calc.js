import getRandomNumber from '../utils/getRandomNumber.js';
import calc from '../utils/calc.js';
import question from '../utils/question.js';
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
