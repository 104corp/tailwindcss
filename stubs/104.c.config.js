const theme = require('./section/c/theme')
const variants = require('./section/c/variants')
const corePlugins = require('./section/c/corePlugins')

module.exports = {
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  presets: [],
  theme,
  variants,
  corePlugins,
  plugins: [],
}
