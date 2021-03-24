// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

//navigacija direkt na pocetnustranicu
Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () => {
  cy.visit("/");
});

//navigacija direkt na checkbox stranicu
Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_page", () => {
  cy.visit("/" + "Dropdown-Checkboxes-RadioButtons/index.html");
});

//pravimo nasu CUSTOM komandu (sa nekom nasom logikom) --> kliknemo na zeljeni item
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    // iteracija kroz sve elemente sa .each()
    const ourProduct = ` ${$el.text()}`; //text elementa
    if (ourProduct.includes(productName)) {
      // kada nadjemo zeljeni element

      cy.wrap($el).click(); // vrapujemo ga i onda klick
      //$el.click();  --> ovo ne moze, jer je to jQuery a nama teba CY komanda
    }
  });
});
//Nova komanda --> dodavanje proizvoda u korpu
Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text() === productName) {
      cy.log($el.text());
      cy.get(".productcart").eq(index).click(); // mora INDEX, inace nece kliknuti na svaki!!
    }
  });
});
// Custom command za popunjavanje login forme
Cypress.Commands.add(
  "webdriverUni_ContactForm_Submission",
  (firstName, lastName, email = null, body, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    if (email !== null) {
      // ova provera je za prazno email polje
      cy.get('[name="email"]').type(email);
    }
    cy.get("textarea.feedback-input").type(body);
    cy.get('[type="submit"]').click();

    cy.get($selector).contains(textToLocate);
  }
);
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//ovo nam je plugin za drag and drop  (ali nece da radi :/)
import "@4tw/cypress-drag-drop";

//ovo je za UPLOAD fajlova
import "cypress-file-upload";
