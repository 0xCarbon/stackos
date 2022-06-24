describe('Swap component', () => {
  before(() => {
    const { SECRET_WORDS, PASSWORD, NETWORK_NAME } = Cypress.env();

    cy.setupMetamask(SECRET_WORDS, NETWORK_NAME, PASSWORD);
    cy.changeMetamaskNetwork('mainnet');
    cy.visit('/token');
  });

  it('should display initial values', () => {
    cy.getBySel('swap-home').should('be.visible');
    cy.getBySel('home-button').should('have.text', 'Connect Wallet');
  });

  it('successfully connects wallet account', () => {
    cy.getBySel('home-button').click();
    cy.getBySel('swap-connect-modal').should('be.visible');
    cy.getBySel('swap-metaMask').click();
    cy.getBySel('account-connected').should('be.visible');
  });

  it('open swap settings', () => {
    cy.getBySel('settings').click();
    cy.getBySel('swap-settings').should('be.visible');
    cy.getBySel('settings-button').should('have.text', 'Confirm Settings');
    cy.window()
      .its('store')
      .invoke('getState')
      .then(({ swap }) => {
        expect(swap.slippageAmount).to.be.a('number').and.equal(0.5);
      });
  });
});
