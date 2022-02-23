import readlineSync from 'readline-sync';

function question(qval) {
  console.log(`Question: ${qval}`);
  const answer = readlineSync.question('Your answer: ');
  return {
    check(correctAnswer) {
      if (answer !== correctAnswer) {
        console.log(
          `${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'`
        );
        throw new Error('Wrong answer');
      } else {
        console.log('Correct!');
      }
    },
  };
}

export default question;
