'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '" https://easy-mock.com/mock/5a2e47b9e576811460c1429f/example"',
  APP_ORIGIN: '" https://easy-mock.com/mock/5a2e47b9e576811460c1429f/example"'
})
