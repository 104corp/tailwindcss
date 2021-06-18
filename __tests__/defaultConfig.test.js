import config from '../defaultConfig.js'
import configStub from '../stubs/104.c.config.js'

test('the default config matches the stub', () => {
  expect(config).toEqual(configStub)
})

test('modifying the default config does not affect the stub', () => {
  config.theme = {}
  expect(config).not.toEqual(configStub)
})
