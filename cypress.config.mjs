import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://paciente-staging.lacreisaude.com.br"
  }
});
