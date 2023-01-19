import { login_button, login_password, login_user } from "../support/locator"

describe('LoginTC', () => {
    it('positivelogin', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get(login_user).type('standard_user')
      cy.get(login_password).type('secret_sauce')
      cy.get(login_button).click()
    })
    it('negativelogin', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get(login_user).type('standard_user')
        cy.get(login_password).type('secret_wrong')
        cy.get(login_button).click()
      })

  })