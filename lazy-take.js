module.exports = iterableFn =>
  function * (n = Infinity) {
    let iterableObj = iterableFn()
    let stop = Number(n)
    let i = 0
    console.log({stop})
    for (const value of iterableObj) {
      if (i === stop) {
        break
      }
      yield value
      i++
    }
  }
  
