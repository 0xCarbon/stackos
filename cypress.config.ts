/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    integrationFolder: 'cypress/tests',
    viewportHeight: 860,
    viewportWidth: 1280,
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});
