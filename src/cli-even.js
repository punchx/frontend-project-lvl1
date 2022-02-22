import game from './game.js';
import getRandomNumber from './getRandomNumber.js';
import question from './question.js';

function cliEven() {
  game(() => {
    const number = getRandomNumber(100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    question(number).check(correctAnswer);
  });
}

export default cliEven;
