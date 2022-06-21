// @ts-check
///<reference path="../global.d.ts" />

Cypress.Commands.add('getBySel', (selector, ...args): any => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add('getBySelLike', (selector, ...args): any => {
  return cy.get(`[data-cy*=${selector}]`, ...args);
});

export {};
