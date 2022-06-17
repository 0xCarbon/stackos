import { User } from 'models';

describe('Cypress Studio Demo', () => {
  beforeEach(function () {
    cy.task('db:seed');

    cy.database('find', 'users').then((user: User) => {
      cy.login(user.username, 's3cret', { rememberUser: true });
    });
  });
  it('create new transaction', () => {
    // Extend test with Cypress Studio
  });
  it('create new bank account', () => {
    // Extend test with Cypress Studio
  });
});
