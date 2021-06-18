const theme = require('./section/b/theme')
const variants = require('./section/b/variants')
const corePlugins = require('./section/b/corePlugins')

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
  theme: theme,
  variants,
  corePlugins,
  plugins: [],
}
