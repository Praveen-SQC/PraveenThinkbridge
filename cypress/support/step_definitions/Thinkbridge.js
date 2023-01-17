import {Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I access the swaglab page', () => {
    cy.visit("https://www.saucedemo.com/");
})

When("I enter the valid user id", () =>{
    cy.get('[data-test="username"]').type('standard_user');
})
When("I enter the valid password", () =>{
    cy.get('[data-test="password"]').type('secret_sauce');
})
Then("I click on login button", () =>{
    cy.get('[data-test="login-button"]').click();
})