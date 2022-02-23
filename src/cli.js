import greetings from './utils/greetings.js';
import getName from './utils/getName.js';

function cli() {
  const name = getName();
  greetings(name);
}

export default cli;
