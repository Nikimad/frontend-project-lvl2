const { EOL } = require('node:os');

function getAnswer(prefix, key, value) {
  const prefixes = {
    gen: `${EOL}   `,
    fprop: `${EOL}  -`,
    sprop: `${EOL}  +`,
  };

  return `${prefixes[prefix]} ${key}: ${value}`;
}

module.exports = getAnswer;
