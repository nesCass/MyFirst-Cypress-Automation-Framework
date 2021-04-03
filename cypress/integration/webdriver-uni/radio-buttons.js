///<reference types ='Cypress' />

describe(`Verify RADIO button via webdriver-uni `, () => {
  //samo jednom pre testova --> ne treba beforeEach (a moze) jer smo nakon prvog testa i dalje na istoj strani koja nam treba za drugi test
  before(() => {
    cy.log("zdravo");
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it(`Check specific radio bttn`, () => {
    cy.get("#radio-buttons").find("[type='radio']").first().check(); //cekirali smo PRVO dugme
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check(); //cekirali smo DRUGO dugme... indexi idu od 0
  });

  it(`Validate the state of specific radio bttn`, () => {
    cy.get("[value= 'pumpkin']").should("be.checked");
    cy.get("[value= 'lettuce']").should("not.be.checked");
    cy.get("[value= 'cabbage']").should("be.disabled");
  });
});
