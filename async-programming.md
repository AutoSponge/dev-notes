name: title
class: center, middle

# "Async Programming" in JavaScript
---

## Business Need

- Personally hand-written name
- Every person in attendance
- On a single piece of paper

![writing](/images/writing_name.gif)

- Optimize: [https://goo.gl/8aHP6Z](https://goo.gl/8aHP6Z)

???
- Speed: are you optimizing for time on task or task completion?
- Expense: are you optimizing for monetary cost? included people time?
  - Idle time vs. active
  - Blocking
- Quality: was legibility a factor?
  - write smaller, the smaller paper will be cheaper to ship
- Resilience: How stable is the solution in the face of chaos?

1. I didn't say order mattered
1. I didn't say what kind of paper (how large)
  - partition the paper
  - stitch the paper together later
1. You don't have to stay in your seats
1. How will you deal with St. Paul?
  - Can you think of a solution that doesn't involve shipping the paper?
---

## Constraints

1. Data storage medium
???

- How did the paper affect the solution?
- What about the envelope used to transport?
--

1. Communication channels
???

- How did your communication change as the solution became faster?
--

1. Convetions and abstractions
???

- What else played a role?
  - Could you use the same solution as 200 years ago?
  - Will this be the best solution 200 years from now?
  - Government imposed speed limits
  - Office procurement policies
--

1. Physics

![future](/images/future.gif)

???
- What part of the task was bound by universal laws?
  - Speed of light, speed of sound, gravity, entropy, etc.
---

## JavaScript's Event Loop

1. It's a queue (FIFO) and a stack (LIFO)
???

- Understanding your environment is critical
- For JS, the most important concept is the event loop
--

1. Stack: Function calls
--

1. Queue: Callbacks (e.g., `setTimeout`)
--

1. "Run-to-completion" and "Never Blocking"
--

1. [visualizer](http://latentflip.com/loupe/)
---

## Single, Shared Thread

1. Loader/parser
--

  - Mitigate with lazy loading, code splitting
--

1. Memory allocation/garbage collection
--

  - Mitigate with [Object Pool](https://en.wikipedia.org/wiki/Object_pool_pattern) pattern
--

1. Reflow/paint
--

  - Each loop contains reflow(s)/repaint
--

  - Mitigate with knowledge of DOM & BOM
--

1. Your JS
--

  - Mitigate with async* (concurrency)

???

techniques
- [`pointer-events: none`](https://www.thecssninja.com/javascript/pointer-events-60fps)
- [Browser Performance](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Intensive_JavaScript)
---

## Async Techniques

- Callbacks
--

- Events
--

- Promises, Futures, Tasks
--

- Streams, Observables
--

- async/await, generators, [async generators](http://2ality.com/2017/03/csp-vs-async-generators.html)

???

These async techniques all help tame non-blocking code, but they're all still using a single thread!
(except some callbacks like node's `fs` which can use up to 4 threads)
---

class: center, middle

## Parallel ~~Async~~ JavaScript
---

## Why Parallel?

1. Async is only Concurrency 
--

  - concurrent vs. sequential
--

  - Work Partitioning
--

  - cpu bound
--

1. Parallelism (serial vs. parallel)
  - Data parallelism
  - Task parallelism

???
- Concurrency is about "it could happen now or later"
- Parallelism is about "simultaneous"
- Parallelism (parallel vs. serial): execute multiple tasks simultaneously
  - Data parallelism: SIMD, WebGL (using GPU)
    - SIMD (single instruction mutliple data)
  - Task parallelism: Web Workers, WebGL, UNIX processes
    - [using shared array buffers](https://gist.github.com/dherman/5463054)
- Concurrency (concurrent vs. sequential): execute several tasks during overlapping periods of time (and not one after another).  
  - time divisional multiplexing (TDM)
- DEMO: parallel tasks increase mem consumption
---

## Parallelism Offers

- Performance
- Productivity
- Generality

<img src="/images/selection_025.png" alt="parallel" width="100%">

???

- We want stuff fast, cheap, and easy
- But we can only pick 2 at best
---

class: center, middle
## Parallel Programming Techniques in JavaScript
---

## Task Parallelism (Easy)

- Clone a Process
--

  - [dedicated] web worker (browser)
--

  - cluster module (node)
--

  - [pm2](https://github.com/Unitech/pm2) in cluster mode (node)

<img src="/images/nodeParallelism.svg" alt="node parallel" width="100%">
---

## Data Parallelism (Med., Exp)

- SIMD (Single Instruction/Multiple Data)

.center[![simd](/images/SIMD.png)]
---

## Combo! (Hard)

- Shared mutable state across threads
  - Browser storage (maybe)
  - SharedArrayBuffer, Atomics (exp)

<img src="/images/02_02-768x438.png" alt="shared array buffer" width="90%">

???

- cross-tab message passing using browser storage
- go read [A cartoon intro to ArrayBuffers and SharedArrayBuffers By Lin Clark](https://hacks.mozilla.org/2017/06/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/)
- SharedArrayBuffer, Atomics (Safari 10.1, FF55)

citation [SharedArrayBuffer](http://2ality.com/2017/01/shared-array-buffer.html)

---

## Multi-threaded JavaScript

- Browser tabs (maybe)
--

- WebGL, WebGL2 (exp)
--

- Shared Web Workers (browser, exp)
--

- Child processes (node)
--

- [ParallelJS](https://github.com/parallel-js/parallel.js) (both)
--

- Nashorn (Java threads, "ew")

???

- SIMD (FF Nightly), WebGL (modern), WebGL2 (Chrome, FF, Opera)
- Shared Web Worker (FF55, Safari 10.1)
---

## Why Don't We Always Do It?

- data copying
???

- Resource Partitioning and Replication
- I/O, disk space, serialization (cpu, mem, time)
--

- message passing
???

- Parallel Access Control
- introduces overhead (like network latency)
--

- code complexity
???

- fights our sequential brain
--

- diminishing returns
???

citation [mandlebrot program](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)

--

- interaction with hardware
???

citation [perfbook](https://www.kernel.org/pub/linux/kernel/people/paulmck/perfbook/perfbook.2016.07.31a.pdf)

---

???
- http://exploringjs.com/es6/ch_async.html
- https://medium.com/@yannickdot/taming-the-async-beast-using-tasks-e62675dde9c
- https://www.gitbook.com/book/kagemand/async-and-performance/details
- https://pusher.com/sessions/meetup/front-end-london/the-evolution-of-asynchronous-javascript
- https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/
- https://www.dynatrace.com/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/
- http://synsem.com/SyncNotAsync/
- https://hacks.mozilla.org/2017/06/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/
- https://impythonist.wordpress.com/2014/12/11/anatomy-and-application-of-parallel-programming-in-python/
- https://nodejs.org/api/vm.html VM api can also create threads, needs investigation
- https://github.com/robtweed/qewd creates child processes for each request
- https://github.com/allegro/node-worker-nodes separate processes
- https://github.com/reconbot/child-process-require Require a function and run it in a child process
- https://github.com/mikeal/znode Bi-directional RPC through any stream
- https://github.com/GoogleChromeLabs/comlink rpc over workers
- https://github.com/Microsoft/napajs Microsoft multi-threaded js runtime
- https://github.com/arrayfire/arrayfire-js parallel programming api in node
