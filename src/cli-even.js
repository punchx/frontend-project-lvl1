import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';
import greetings from './greetings.js';

function cliEven() {
  let count = 3;
  const name = greetings();

  while (count > 0) {
    const number = getRandomNumber(100);
    console.log(`Question: ${number}`);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (!(answer.toLowerCase() === correctAnswer)) {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      break;
    } else {
      console.log('Correct!');
      count -= 1;
    }
  }

  if (count === 0) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

export default cliEven;
