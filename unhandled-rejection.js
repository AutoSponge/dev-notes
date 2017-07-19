// const callsite = require('callsite-record')

// useful for making sure we handle our errors
// process.on('unhandledRejection', err => {
//   console.log(
//     callsite({ forError: err }).renderSync({
//       stackfilter (frame) {
//         return !frame.getFileName().includes('node_modules')
//       }
//     })
//   )
// })

// generic closure
(function (global) {  
  if (global.process) {
    process.on('unhandledRejection', handleError)
  } else {
    if (global.window) {
      global.window.addEventListener('unhandledrejection', handleError)
    }
  }
  function handleError(event) {
    console.log(event)
  }
}(this))
