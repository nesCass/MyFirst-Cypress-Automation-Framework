/// <reference types="Cypress" />

describe("Handling DATA from table", () => {
  //hook --> nesto kao @beforeMethod  u TestNG-iju
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all users", () => {
    let userDetails = [];
    let total = 0;

    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        for (const item of userDetails) {
          if (Number(item)) {
            total += Number(item);
          }
        }
        expect(total).to.be.eq(322);
      });
  });
  it.only("Calculate and assert the age of a given user based on lastname", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      if ($el.text().includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((age) => {
            const userAge = Number(age.text());
            expect(userAge).to.be.eq(80);
          });
      }
    });
  });
});
