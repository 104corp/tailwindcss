const cloneDeep = require('lodash/cloneDeep')
const defaultConfig = require('./stubs/104.c.config.js')

module.exports = cloneDeep(defaultConfig.theme)
