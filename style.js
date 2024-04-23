const styles = {
  bold: (text) => `\x1b[1m${text}\x1b[0m`,
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  underline: (text) => `\x1b[4m${text}\x1b[0m`,
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
  reset: "\x1b[0m",
};

module.exports = styles;
