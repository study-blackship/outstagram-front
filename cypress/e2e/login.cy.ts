describe('login', () => {
  it('visits login page', () => {
    cy.visit('/login');
    cy.findByRole('heading').should('have.text', 'Login');
  });

  it('should login with valid credentials', () => {
    cy.findByPlaceholderText('전화번호').type('01012345678');
    cy.findByPlaceholderText('비밀번호').type('1234');
    cy.findByRole('button', { name: '로그인' }).click();
  });
});
