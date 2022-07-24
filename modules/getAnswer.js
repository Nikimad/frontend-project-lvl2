function getAnswer(prefix, key, value) {
  const prefixes = {
    gen: '\r\n   ',
    fprop: '\r\n  -',
    sprop: '\r\n  +',
  };

  return `${prefixes[prefix]} ${key}: ${value}`;
}

module.exports = getAnswer;
