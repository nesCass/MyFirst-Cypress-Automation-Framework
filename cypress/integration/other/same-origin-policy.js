///<reference types = "cypress"/>

describe(`Cypress web security`, () => {
  it(`Validate visiting two different domain`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
    //ovo ne radi nikako
  });

  it.only(`Validate visiting two different domain VIA USER ACTION`, () => {
    cy.visit("http://www.webdriveruniversity.com/");

    cy.get("#automation-test-store").invoke("removeAttr", "target").click();

    //ovo radi samo ako  u cypres.json dodas "chromeWebSecurity" = false
  });
});
