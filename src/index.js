import path from 'path'
import fs from 'fs'

import _ from 'lodash'
import postcss from 'postcss'

import getModuleDependencies from './lib/getModuleDependencies'
import registerConfigAsDependency from './lib/registerConfigAsDependency'
import processTailwindFeatures from './processTailwindFeatures'
import formatCSS from './lib/formatCSS'
import resolveConfig from './util/resolveConfig'
import getAllConfigs from './util/getAllConfigs'
import { defaultConfigFile, defaultConfigStubFileForB } from './constants'
import defaultConfig from '../stubs/104.c.config'

function resolveConfigPath(filePath) {
  // require('tailwindcss')({ type: ... })
  if (_.isObject(filePath) && _.has(filePath, 'type') && _.isString(filePath.type)) {
    if (filePath.type === 'b') return path.resolve(defaultConfigStubFileForB)
    else return path.resolve(defaultConfigFile)
  }

  // require('tailwindcss')({ theme: ..., variants: ... })
  if (_.isObject(filePath) && !_.has(filePath, 'config') && !_.isEmpty(filePath)) {
    return undefined
  }

  // require('tailwindcss')({ config: 'custom-config.js' })
  if (_.isObject(filePath) && _.has(filePath, 'config') && _.isString(filePath.config)) {
    return path.resolve(filePath.config)
  }

  // require('tailwindcss')({ config: { theme: ..., variants: ... } })
  if (_.isObject(filePath) && _.has(filePath, 'config') && _.isObject(filePath.config)) {
    return undefined
  }

  // require('tailwindcss')('custom-config.js')
  if (_.isString(filePath)) {
    return path.resolve(filePath)
  }

  // require('tailwindcss')
  try {
    const defaultConfigPath = path.resolve(defaultConfigFile)
    fs.accessSync(defaultConfigPath)
    return defaultConfigPath
  } catch (err) {
    return undefined
  }
}

const getConfigFunction = config => () => {
  if (_.isUndefined(config)) {
    return resolveConfig([...getAllConfigs(defaultConfig)])
  }

  // Skip this if Jest is running: https://github.com/facebook/jest/pull/9841#issuecomment-621417584
  if (process.env.JEST_WORKER_ID === undefined) {
    if (!_.isObject(config)) {
      getModuleDependencies(config).forEach(mdl => {
        delete require.cache[require.resolve(mdl.file)]
      })
    }
  }

  const configObject = _.isObject(config) ? _.get(config, 'config', config) : require(config)

  return resolveConfig([...getAllConfigs(configObject)])
}

const plugin = postcss.plugin('tailwind', config => {
  const plugins = []
  const resolvedConfigPath = resolveConfigPath(config)

  if (!_.isUndefined(resolvedConfigPath)) {
    plugins.push(registerConfigAsDependency(resolvedConfigPath))
  }

  return postcss([
    ...plugins,
    processTailwindFeatures(getConfigFunction(resolvedConfigPath || config)),
    formatCSS,
  ])
})

module.exports = plugin
