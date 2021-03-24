///<reference types ='Cypress' />

describe(`Interact with DROPDOWN list via webdriver-uni `, () => {
  it(`Select specific values via dropdown list`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven"); //selectovano po value='maven'
    cy.get("#dropdowm-menu-2").select("Maven").contains("Maven"); //selektovano po textu koji pise
  });
});
