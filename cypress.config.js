const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xnkyac',
  e2e: {
    baseUrl: "https://getmeddevices.com/version-test/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    MAILOSAUR_API_KEY: '2nj9BTbouvdJHr5tndTwDjavOJ5cUpfT',
    MAILOSAUR_SERVER_ID: 'wdm9tk5f'
  }
})
