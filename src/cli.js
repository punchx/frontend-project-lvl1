import readlineSync from 'readline-sync';

function greetings() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May, I have your name please?: ');
  console.log(`Hello, ${name}`);
}

export default greetings;
