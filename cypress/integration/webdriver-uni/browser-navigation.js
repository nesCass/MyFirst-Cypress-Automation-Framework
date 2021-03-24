/// <reference types = 'cypress'/>

describe(`Validate  webdriver uni home page link`, () => {
  it(`Confirm links redirect to the correct pages`, () => {
    cy.visit("http://www.webdriveruniversity.com/");

    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

    //assert da je URL dobar!
    cy.url().should("include", "/contactus.html");

    cy.go("back"); //back  dugme u pretrazivacu
    cy.go("forward"); //forward dugme
    cy.reload(); //ponovo ucitavanje stranice
    cy.reload(true); //ponovo ucitavanje stranice BEZ koriscenja kesh memorije
    cy.go(-1); //isto back
    cy.go(1); // isto forward

    //assert da je URL dobar!
    cy.url().should("include", "/contactus.html");
    cy.go(-1);
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    //assert da je URL dobar!
    cy.url().should("include", "/Login-Portal/index.html");
    cy.go(-1);
  });
});
