const isIterable = (obj = {}) => typeof obj[Symbol.iterator] === 'function'
const makeIterator = (arr = []) => arr[Symbol.iterator]()
