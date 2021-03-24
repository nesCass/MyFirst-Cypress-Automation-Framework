///<reference types ='Cypress' />

describe(`Handle JS Alerts`, () => {
  it(`Confirm JS Alerts contains the correct text`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button1").click();

    // ovako izvucemo TEXT iz alerta
    cy.on("window:alert", (prom) => {
      expect(prom).to.equal("I am an alert box!");
    });
  });

  it(`Validate JS CONFIRM BOX works correctly when clicking OK`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click();

    // ovako kliknemo na OK button alert boxu
    cy.on("window:alert", (prom) => {
      return true;
    });
    cy.get("#confirm-alert-text").should("contain", "You pressed OK!");
  });

  it(`Validate JS CONFIRM BOX works correctly when clicking CANCEL`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click();

    // ovako kliknemo na CANCEL button alert boxu
    cy.on("window:confirm", (prom) => {
      return false;
    });
    cy.get("#confirm-alert-text").should("contain", "You pressed Cancel!");
  });

  it.only(`Validate JS CONFIRM BOX works using a STUB`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    //validiramo pitanje koje se pojavi u alert boxu
    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      });
  });
});
