function getAnswer(prefix, key, value) {
  const prefixes = {
    gen: '\n   ',
    fprop: '\n  -',
    sprop: '\n  +',
  };

  return `${prefixes[prefix]} ${key}: ${value}`;
}

module.exports = getAnswer;
