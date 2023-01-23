describe('itemsToCart', () => {

it('multipleItemsToCart.cy.js', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').clear('st');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="product_sort_container"]').select('lohi');
    cy.get('.shopping_cart_badge').click();
    cy.get('[data-test="remove-sauce-labs-onesie"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').clear('p');
    cy.get('[data-test="firstName"]').type('praveen');
    cy.get('[data-test="lastName"]').clear();
    cy.get('[data-test="lastName"]').type('n');
    cy.get('[data-test="postalCode"]').clear();
    cy.get('[data-test="postalCode"]').type('82929');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('#checkout_complete_container').click();
    cy.get('[data-test="back-to-products"]').click();
    /* ==== End Cypress Studio ==== */
  });
});