const { defineConfig } = require('cypress')
require('dotenv').config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://giphy.com',
    viewportWidth: 1240,
    viewportHeight: 900,
    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
    },
  },
})
