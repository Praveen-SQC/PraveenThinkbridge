const { defineConfig } = require("cypress");

module.exports = defineConfig({
   "chromeWebSecurity": false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  }, 
});
