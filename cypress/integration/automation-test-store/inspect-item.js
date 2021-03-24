///<reference types ='Cypress'/>   //da bi mogli ad koristimo cy objekat i preko njega funkcije

describe(`Inspect 'Automation Store' items using chain of commands`, () => {
  it(`Click on the first item using item header`, () => {
    cy.visit("https://automationteststore.com/"); //odlazak na stranicu

    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click(); //clik na prvi itemnpx sypre
  });

  it(`Click on the first item using item text`, () => {
    cy.visit("https://automationteststore.com/"); //odlazak na stranicu

    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click(); //chainning commands   get --> contaon --> click
  });
  it(`Click on the first item using item index`, () => {
    cy.visit("https://automationteststore.com/"); //odlazak na stranicu

    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click(); //pronadji prvu klasu pa u njenim rezultatima pronadji drugu klasu pa u njenim rez mi vrati item sa indexom nula
  });
});
