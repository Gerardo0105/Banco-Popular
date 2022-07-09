const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.bancopopular.fi.cr/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
