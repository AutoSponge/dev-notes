const http = require('http')
const os = require('os')

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.write(
      JSON.stringify(
        {
          hardware: {
            arch: os.arch(),
            cpus_count: os.cpus().length,
            cpus: os.cpus(),
            mem: {
              freemem: os.freemem(),
              totalmem: os.totalmem()
            }
          },
          node: {
            versions: process.versions
          },
          os: {
            type: os.type(),
            release: os.release()
          }
        },
        null,
        '  '
      )
    )
    res.end()
  })
  .listen(process.env.PORT || 3000)
