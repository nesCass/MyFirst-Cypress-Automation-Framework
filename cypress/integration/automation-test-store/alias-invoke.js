/// <reference types ="cypress" />

describe(`Alias and Invoke`, () => {
  it(`Validate specific Hair Care product`, () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*= 'product/category&path=']").contains("Hair Care").click();

    // !!!
    cy.get(".fixed_wrapper .prdocutname") // locirali smo sve nazive svih proizvoda
      .eq(0) //prvi naziv
      .invoke("text") //izvucemo text tog naziva prvog proizvoda
      .as("imePromenljive"); //  i taj izvuceni test smestimo u promenljivu kojoj damo ime

    //asserts
    cy.get("@imePromenljive").its("length").should("be.gt", 5); // mora @ ako hoces da koristis promenljivu
    cy.get("@imePromenljive").should("include", "Seaweed Cond");
  });
  it(`Check the number of producton Home Page`, () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").its("length").as("prom");
    cy.get("@prom").should("eq", 16);
    //ili
    cy.get(".thumbnail").should("have.length", 16);

    cy.get(".productcart")
      .eq(0)
      .invoke("attr", "title") // ovo 'attr' sluzi da izvuces atribut koji zelis
      .should("include", "Add to Cart");
    // cy.get("@prom1").should(, "Add to Cart");
  });

  it.only(`Calculate total of normal and sale product`, () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("prom");

    // cy.get("@prom")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     const productPrice = `${$el.text()}`;
    //     cy.log(productPrice);
    //   });

    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".pricenew").invoke("text").as("saleItemPrice");
    let totalPrice = 0;

    cy.get("@itemPrice").then(($linkText) => {
      let prices = $linkText.split("$");

      for (const item of prices) {
        totalPrice += Number(item); // convert  to number !
      }
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let prices = $linkText.split("$");

        for (const item of prices) {
          totalPrice += Number(item); // convert  to number !
        }
      })
      // opet then!!! mora ovako a bi imao kontrolu nad izvrsavanjem komandi
      .then(() => {
        cy.log(`TOTAL JE: ${totalPrice}`);
        //assert
        expect(totalPrice).to.equal(679.1);
      });
  });
});
