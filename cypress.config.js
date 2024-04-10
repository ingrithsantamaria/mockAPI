const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com",
    defaultCommandTimeout: 60000,
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
