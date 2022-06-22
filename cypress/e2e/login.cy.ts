/// <reference types="cypress" />

describe('login', () => {
  it('visits login page', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('h1').contains('Login');
  });

  it('should login with valid credentials', () => {
    cy.get('input[placeholder=전화번호]').click().type('01012345678');
    cy.get('input[placeholder=비밀번호]').click().type('1234');
    cy.get('button').contains('로그인').click();
  });
});
