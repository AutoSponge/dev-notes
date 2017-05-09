const path = require('path')
const slugify = require('to-slug-case')
module.exports = (...segments) =>
  new Proxy(
    new String(path.join(...segments)), // eslint-disable-line no-new-wrappers
    { get: (base, module) => require(`${base}${path.sep}${slugify(module)}`) }
  )
