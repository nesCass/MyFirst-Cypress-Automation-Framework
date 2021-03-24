///<reference types ='Cypress' />

describe(`Handling IFRAME & MODALS `, () => {
  it(`Handle webdriver uni Iframe and modal`, () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

    //pristupimo body-ju iframe-a (stranica u stranici)
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe"); //wrapovali smo ga da bi nad njim mogli da koristimo cy komande.. i dali mu alias
    });

    cy.get("@iframe").find("#button-find-out-more").click(); //klik na neko dugme i
    cy.get("@iframe").find("#myModal").as("modal"); // i pojavi se modal

    //izvucemo text iz modala
    cy.get("@modal").should(($prom) => {
      const text = $prom.text();
      expect(text).to.include("Welcome to"); //assert
    });

    cy.get("@modal").contains("Close").click(); //zastvorimo modal klikom na close btn
  });
});
