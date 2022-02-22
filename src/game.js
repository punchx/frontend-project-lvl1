import getName from './getName.js';
import greetings from './greetings.js';

function game(cb) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  greetings(name);

  let count = 3;
  while (count > 0) {
    try {
      cb();
    } catch {
      break;
    }
    count -= 1;
  }

  if (count === 0) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

export default game;
