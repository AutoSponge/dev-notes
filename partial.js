const partial = (arity, fn, bound) => {
  if (typeof arity === 'function') {
    return partial(fn.length, fn)
  }
  return (...applied) => {
    const args = bound.concat(applied)
    return args.length < arity ? partial(arity, fn, args) : fn.apply(this, args)
  }
}
