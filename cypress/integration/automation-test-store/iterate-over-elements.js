/// <reference types = "cypress" />

describe(`Iterate over elements`, () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*= 'product/category&path=']").contains("Hair Care").click();
  });

  it(`Log information of all Hair Care products`, () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log(`Index: ${index} : ${$el.text()}`); // ili ovako -->  cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it(`Add specific product to basket`, () => {
    /*
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      // iteracija kroz sve elemente sa .each()
      const ourProduct = ` ${$el.text()}`; //text elementa
      if (ourProduct.includes("Curls to straight Shampoo")) {
        // kada nadjemo zeljeni element

        cy.wrap($el).click(); // vrapujemo ga i onda klick
        //$el.click();  --> ovo ne moze, jer je to jQuery a nama teba CY komanda
      }
    });
*/
    //nasa CUSTOM COMMAND --> ovu gore logiku smo izmesti li i napravli novu funkciju u fajlu commands.js

    cy.selectProduct("Curls to straight Shampoo"); //pozivanje custom commande
  });

  it(`Add another specific product to basket`, () => {
    cy.selectProduct("Seaweed Conditioner"); //ednostavno pozivanje custom commande u drugom testu
  });
  it(`Add another specific product to basket`, () => {
    cy.selectProduct("Eau"); //ednostavno pozivanje custom commande u drugom testu
  });
});
