import { login_button, login_password, login_user } from "../support/locator"
const randomEmail = require('random-email');

describe('EndToEnd', () => {
  it('E2E', () => {
    //var randomEmail = require('random-email');
    cy.visit('https://www.saucedemo.com/')
      cy.get(login_user).type('standard_user')
      cy.get(login_password).type('secret_sauce')
      cy.get(login_button).click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('.shopping_cart_link').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type(randomEmail({ domain: 'gmail.com' }));
      cy.get('[data-test="lastName"]').type('Nandakumar')
      cy.get('[data-test="postalCode"]').type('641039')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
      cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
  })
})