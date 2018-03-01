paint.jsconf.is = paint harpa

magni

# Anna Henningsen
@addaleax

- async_hooks replaces domains
  - would benefit from d3 graphs
- fs/promises in node 10
- web assembly
- Buffer constructor deprecated

# Dan Abramov
Beyond React 16

- async rendering for better CPU + IO (repsonsive)
- async DOM updates > debounce > sync and remains interactive
- priority as a feature of setState (deferSetState)
- time slicing: similar to git rebase a branch
- "suspense": fetcher, spinner
- dynamic code splitting with fetcher and import
? - how is the spinner defined, could blur-up be added
? - can fetcher be aborted (e.g., cancel image download)
- reactjs.org/blog

# David Khourshid
simplify complex UIs

- xstate
- https://css-tricks.com/robust-react-user-interfaces-with-finite-state-machines/
- action + state => event
- fsm and statecharts (to simplify UI dev)
- easy to add analytics
- then easy to generate "happy path" or all paths from algorithm
- easy to demo/visualize bugs (like race conditions)
- harel statecharts
  - fsm with actions, guards, nested/parallel states, history
- looks good for interaction designers
- statecharts.github.io