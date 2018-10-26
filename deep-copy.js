function structuredClone(obj) {
  const oldState = history.state
  history.replaceState(obj, window.title)
  const copy = history.state
  history.replaceState(oldState, window.title)
  return copy
}
