///<reference types ='Cypress' />

describe(`Verify AAUTOCOMPLITE dropdown list`, () => {
  it(`Select specific product via autocomplete list`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");

    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const product = $el.text();
        const productToSelect = "Avacado";

        if (product === productToSelect) {
          $el.trigger("click"); // ovde mora trigger()
          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("g");

        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const product = $el.text();
          const productToSelect = "Grapes";

          if (product === productToSelect) {
            $el.trigger("click"); // ovde mora trigger()
            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
        });
      });
  });
});
