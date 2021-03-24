///<reference types ='Cypress'/>   //da bi mogli ad koristimo cy objekat i preko njega funkcije

describe(`Verifying variables, cypress commands and jQuery commands`, () => {
  it(`Navigatting to specific product pages`, () => {
    cy.visit("https://automationteststore.com/"); //odlazak na stranicu
    const makeUpLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup"); //dinamicki selektor!!   --> potrazi 'a' tag, u njemu trazi 'href' atribut i
    //pretrazi vrednost tog atributa  ako ima bilo gde '*' ono sto mu trazis (deo linka)... i medju svim tim elementima nadji onaj koji sadrzi 'Makeup'

    makeUpLink.click(); //bitan je redosled tj. da odmah nakon pronalaska elementa kliknemo na njega
    const skinCareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");

    skinCareLink.click();

    //zato je lakse da koristimo
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  it(`Navigating to MakeUp product page`, () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    /* ne moze ovako, kao u Seleniumu
     const element = cy.get("h1 .maintext");
    cy.log(element.text()); */

    //mora promise ako hoces sa promenljivom
    cy.get("h1 .maintext").then(($headerText) => {
      const headertext = $headerText.text();
      cy.log("Ispravno smo izvukli text!!  --> " + headertext);

      expect(headertext).is.eq("Makeup"); //assert with CHAI expect function
    });
  });

  it.only(`Navigating to 'Contact Us' page and Validate properties `, () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // 1. cypress commands and chaining (jednostavno komande se nadovezuju jedna na drugu)

    cy.contains("#ContactUsFrm", "Contact Us Form") //da div sa ID (#ContactUsFrm) ima u sebi element sa textom  'Contact Us Form'
      .find("#field_11") //da div sa ID (#ContactUsFrm) ima u sebi element sa ID (#field_11)
      .should("contain", "First name:"); // koji u sebi ima text 'First name:'

    // 2. jQuery approach ( u THEN bloku koristimo jquery funkcije i promenljivu)

    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstName = text.find("#field_11").text(); // find() i text() su iz jQuery-a

      expect(firstName).to.contain("First name:"); //assert from CHAI

      // 3. Embedded commands ( CLOSURE ) --> u THEN bloku se mogu se koristiti CY komande
      cy.get("#field_11").then((el) => {
        cy.log(el.text());
      });
    });
  });
});
