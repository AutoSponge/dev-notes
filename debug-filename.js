const debug = require('debug')(__filename.replace(/^.*[/]([^.]+)\.js/g, '$1')) // file-name
const debug = require('debug')(__filename.replace(/^.*[/](.*)[/]([^.]+)\.js/g, '$1:$2')) // folder:file-name
const debug = require('debug')(__filename.replace(/^.*[/]([^/]+)\.js$/, '$1')) // filename
const debug = require('debug')(__filename.replace(/^.*[/](.*)[/]([^/]+)\.js$/, '$1')) // folder
