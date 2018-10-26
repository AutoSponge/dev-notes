class Emitter {
  constructor (data) {
    this.data = data
    this.events = new Map()
  }

  on (name, fn) {
    const fns = this.events.get(name) || new Set()
    fns.add(fn)
    this.events.set(name, fns)
    return this
  }

  off (name, fn) {
    return this.events.has(name) && this.events.get(name).delete(fn)
  }

  emit (name, ...args) {
    const fns = this.events.get(name) || []
    fns.forEach(fn => fn(...args))
    return this
  }
}
