const isIterable = (obj = {}) => typeof obj[Symbol.iterator] === 'function'
const makeIterator = (arr = []) => arr[Symbol.iterator]()
module.exports = fn =>
  function * (iterable) {
    for (const x of iterable) {
      yield fn(x)
    }
  }
  
