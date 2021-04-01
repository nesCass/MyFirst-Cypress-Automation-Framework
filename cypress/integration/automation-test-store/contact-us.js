///<reference types ='Cypress' />

describe(`Test 'Contact us' form via Automation Test Store`, () => {
  before(`HOW TO USE FIXTURE - sa ALIASOM`, () => {
    cy.viewport(550, 750); //velicina ekrana u pixelima
    cy.fixture("userDetails").as("ivica");
  });

  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.xpath(
      "//a[contains(@href,'https://automationteststore.com/index.php?rt=content/contact999')]"
    )
      .click()
      .then(function (obj) {
        cy.log("This is text from previous object: " + obj.text());
      });
  });

  it(
    `Should be able to submit a successful submission via contact us form`,
    {
      retries: {
        // Configure retry attempts for `cypress run` (from command line)  // Default is 0
        runMode: 2,
        // Configure retry attempts for `cypress open` (from cypress runner)   // Default is 0
        openMode: 2,
      },
    },
    () => {
      //koristimo podatke iz json fajla us pomoc aliasa
      cy.get("@ivica").then((user) => {
        cy.get("#ContactUsFrm_first_name").type(user.first_name);
        cy.get("#ContactUsFrm_email").type(user.email);
      });

      //assert
      cy.get("#ContactUsFrm_email").should("have.attr", "name", "email"); // da li atribut 'name' ima vrednost 'email'

      cy.get("#ContactUsFrm_enquiry").type("nesto ovde pise");
      cy.xpath("//button[@title='Submit']").click();

      //assert
      cy.get(".mb40 > :nth-child(3)").should(
        "have.text",
        "Your enquiry has been successfully sent to the store owner!"
      );
    }
  );
});
