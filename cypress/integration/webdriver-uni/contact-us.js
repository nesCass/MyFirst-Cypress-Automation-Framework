import Homepage_Po from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_Po from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

///<reference types ='Cypress' />

describe(`Test 'Contact us' form`, { browser: "!chrome" }, () => {
  //ignore all test if cypress is running via chrome
  Cypress.config("defaultCommandTimeout", 60000);
  const homepage_PO = new Homepage_Po();
  const contact_Us_PO = new Contact_Us_Po();

  before(`Ucitavanje podataka iz fixtures/example.js`, () => {
    //PRVI nacin  (koristim dole u prvom testu)
    cy.fixture("example").then((data) => {
      //this.data = data;
      globalThis.data = data; // mozei ovo ako ne radi prva linija
    });

    // DRUGI naci - alias (koristim doel udrugom testu)
    // cy.fixture("example").as("ivica");

    //!! ne moze u before() da kombinuje ova dva nacina ili jedan ili drugi !!!
  });

  beforeEach(() => {
    /* cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });*/
    /*    //zamena sa env
    cy.visit(
      Cypress.env("webdriveruni_homepage") + "Contact-Us/contactus.html"
    );*/

    //POM
    homepage_PO.visitHomepage(); // pozivam f-ju koja me vodi na pocetnu stranicu
    homepage_PO.clickOn_Contact_Us_Button();

    // cy.pause(); // pauziramo test
    // cy.wait(20000);   // zaustavljamo test na 20 sekundi
  });

  it(`Should be able to submit a successful submission via contact us form`, () => {
    //asserts
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "/Contact-Us/contactus.html");

    /*
    //koristimo podatke koje smo ucitali iz fajla  (PRVI NACIN)
    cy.get('[name="first_name"]').type(data.first_name); //
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type(data.body);
    cy.get('[type="submit"]').click();
    //assert
    cy.get("h1").should("have.text", "Thank You for your Message!");
    */

    /* //koristimo nasu CUSTOM COMMAND
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "Ovo je moj komentar ...a moze i iz .json fajla da vuces",
      "body",
      "Thank You for your Message!"
    ); */

    //POM
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"), //moze da vuces prom iz 'cypres.json'
      data.last_name, // a mozes i iz fixture foldera gde cuvas podatke  podaci
      data.email,
      "Ovo je moj komentar ...a moze i iz .json fajla da vuces",
      "body",
      "Thank You for your Message!"
    );
  });
  it(`Should not be able to submit a successful submission via contact us form as all field are required`, () => {
    if (Cypress.isBrowser("firefox")) {
      console.log("test will not execute in firefox");
    } else {
      //koristimo podatke koje smo ucitali iz fajla - uz pomoc ALIASA (DRUGI NACIN)

      // DRUGI naci - alias (koristim doel udrugom testu)
      cy.fixture("example").as("ivica");

      /*
    cy.get("@ivica").then((user) => {
      cy.get('[name="first_name"]').type(user.first_name);
      cy.get('[name="last_name"]').type(user.last_name);
      cy.get("textarea.feedback-input").type(user.body);
    });
    cy.get('[type="submit"]').click();

    //assert
    cy.get("body").contains("Error: all fields are required");
*/
      /*  //custom command
    cy.get("@ivica").then((user) => {
      cy.webdriverUni_ContactForm_Submission(
        user.first_name,
        user.last_name,
        null, //ovo je razno polje u email adresi
        "Ovo je moj komentar ...a moze i iz .json fajla da vuces",
        "body",
        "Error: all fields are required"
      );
    });*/

      //POM
      cy.get("@ivica").then((user) => {
        contact_Us_PO.contactForm_Submission(
          user.first_name,
          user.last_name,
          null, //ovo je razno polje u email adresi
          "Ovo je moj komentar ...a moze i iz .json fajla da vuces",
          "body",
          "Error: all fields are required"
        );
      });
    }
  });
});
