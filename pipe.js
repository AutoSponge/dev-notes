module.exports = (head, ...tail) => (...args) =>
  tail.reduce((value, fn) => fn(value), head(...args))
