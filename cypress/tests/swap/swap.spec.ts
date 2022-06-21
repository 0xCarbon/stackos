describe('Swap component', () => {
  beforeEach(() => {
    cy.visit('token');
  });

  it('should display initial values', () => {
    cy.getBySel('swap-home').should('be.visible');
    cy.getBySel('home-button').should('have.text', 'Connect Wallet');
    // cy.getBySelLike('input').should('be.visible');
  });

  it('connects wallet account', () => {
    // TODO
  });

  it('open swap settings', () => {
    cy.getBySel('settings').click();
    cy.getBySel('swap-settings').should('be.visible');
    cy.getBySel('settings-button').should('have.text', 'Confirm Settings');
    cy.window()
      .its('store')
      .invoke('getState')
      .then(({ swap }) => {
        console.log(swap);
        expect(swap.slippageAmount).to.be.a('number').and.equal(0.5);
      });
    // cy.getBySelLike('input').should('be.visible');
  });

  it('change swap settings and confirm', () => {
    cy.getBySel('settings').click();
    cy.getBySel('swap-settings').should('be.visible');
    cy.getBySel('settings-button').should('have.text', 'Confirm Settings');
    cy.window()
      .its('store')
      .invoke('getState')
      .then(({ swap }) => {
        console.log(swap);
        expect(swap.slippageAmount).to.be.a('number').and.equal(0.5);
      });
    // cy.getBySelLike('input').should('be.visible');
  });

  it('change swap settings and close', () => {
    cy.getBySel('settings').click();
    cy.getBySel('swap-settings').should('be.visible');
    cy.getBySel('settings-button').should('have.text', 'Confirm Settings');
    cy.window()
      .its('store')
      .invoke('getState')
      .then(({ swap }) => {
        console.log(swap);
        expect(swap.slippageAmount).to.be.a('number').and.equal(0.5);
      });
    // cy.getBySelLike('input').should('be.visible');
  });
});
