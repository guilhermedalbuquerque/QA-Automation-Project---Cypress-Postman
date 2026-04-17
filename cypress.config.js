const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

require('dotenv').config()

// Exportar chave da API.
module.exports = {
  e2e: {
    env: {
      apiKey: process.env.API_KEY
    }
  }
}