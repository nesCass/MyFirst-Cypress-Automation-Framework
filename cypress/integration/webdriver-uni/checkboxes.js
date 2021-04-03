///<reference types ='Cypress' />
// pre svakog testa
beforeEach(`pre svakog testa`, () => {
  //cy.visit("/"); // poziv "baseUrl" iz cypress.json

  //  cy.navigateTo_WebdriverUni_Homepage(); // custom commanda koja nas vodi na baseurl
  /*  cy.get("#dropdown-checkboxes-radiobuttons")
    .invoke("removeAttr", "target") //skidamo mu atribut da nam ne otvori novi tab
    .click({ force: true }); //force u slucaju da ganeki drugi element preklopi  */

  cy.navigateTo_WebdriverUni_Checkbox_page(); // jos jedna custom (umesto svega ovog gore)
});

describe(`Verify checkboxes via webdriver-uni `, () => {
  it(`Check and validate checkbox`, () => {
    cy.get("#checkboxes > :nth-child(1) > input").should("not.be.checked");

    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get("#checkboxes > :nth-child(1) > input").as("opcija1");
    cy.get("@opcija1").uncheck().should("not.be.checked");
  });

  it(`Uncheck and validate checkbox`, () => {
    cy.get("#checkboxes > :nth-child(5) > input").as("opcija3");
    cy.get("@opcija3").uncheck().should("not.be.checked");
  });

  it(`Check multiple checkboxes`, () => {
    cy.get("input[type='checkbox']").check(["option-1", "option-2"]); //u [] stavis sta sve hoces da cekiras

    cy.xpath("//input[@value='option-1']").should("be.checked");
    cy.xpath("//input[@value='option-2']").should("be.checked");
  });

  /* === Test Created with Cypress Studio === */
  it('check all radio buttons', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[value="green"]').check();
    cy.get('[value="blue"]').check();
    cy.get('[value="yellow"]').check();
    cy.get('#radio-buttons > [value="orange"]').check();
    cy.get('[value="purple"]').check();
    /* ==== End Cypress Studio ==== */
  });
});
