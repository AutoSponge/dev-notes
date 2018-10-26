const IDLE = Symbol('IDLE')
const idle = fn => {
  let result = IDLE
  const resolve = requestIdleCallback(() => {
    result = fn()
  })
  return () => {
    if (result === IDLE) {
      cancelIdleCallback(resolve)
      result = fn()
    }
    return result
  }
}
