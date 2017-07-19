const callsite = require('callsite-record')

// useful for making sure we handle our errors
process.on('unhandledRejection', err => {
  console.log(
    callsite({ forError: err }).renderSync({
      stackfilter (frame) {
        return !frame.getFileName().includes('node_modules')
      }
    })
  )
})
