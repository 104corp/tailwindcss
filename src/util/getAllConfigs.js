import defaultConfig from '../../stubs/104.c.config.js'
import defaultConfigForB from '../../stubs/104.b.config.js'
import { flagEnabled } from '../featureFlags'
import uniformColorPalette from '../flagged/uniformColorPalette.js'
import extendedSpacingScale from '../flagged/extendedSpacingScale.js'
import defaultLineHeights from '../flagged/defaultLineHeights.js'
import extendedFontSizeScale from '../flagged/extendedFontSizeScale.js'
import darkModeVariant from '../flagged/darkModeVariant.js'
import standardFontWeights from '../flagged/standardFontWeights'
import additionalBreakpoint from '../flagged/additionalBreakpoint'
import { flatMap, get } from 'lodash'

export default function getAllConfigs(config) {
  const configs = flatMap(
    [
      ...get(config, 'presets', [config.type === 'b' ? defaultConfigForB : defaultConfig]),
    ].reverse(),
    preset => {
      return getAllConfigs(preset)
    }
  )

  const features = {
    uniformColorPalette,
    extendedSpacingScale,
    defaultLineHeights,
    extendedFontSizeScale,
    standardFontWeights,
    darkModeVariant,
    additionalBreakpoint,
  }

  Object.keys(features).forEach(feature => {
    if (flagEnabled(config, feature)) {
      configs.unshift(features[feature])
    }
  })

  return [config, ...configs]
}
