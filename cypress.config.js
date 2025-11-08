/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  },

  e2e: {
    baseUrl: 'http://localhost:3000/',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
