'use strict'
const path = require('path')
module.exports = {
  dev: {
    NODE_ENV: '"development"',
    BASE_API: '"http://localhost:8687"'
  },
  demo: {
    BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"'
  },
  test: {
    BASE_API: '"http://localhost:8687"',
    config: {
      index: path.resolve(__dirname, '../server/dist/index.html'),
      assetsRoot: path.resolve(__dirname, '../server/dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
    }
  },
  production: {
    BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"'
  }
}
