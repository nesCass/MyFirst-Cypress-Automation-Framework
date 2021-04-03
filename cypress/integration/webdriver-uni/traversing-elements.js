/// <reference types="Cypress" />

describe("Traversing DOM elements in Cypress", () => {
  //hook --> nesto kao @beforeMethod  u TestNG-iju
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("children() to get the children of DOM elements", () => {
    cy.get(".traversal-breadcrumb")
      .children(".active") //selectujes sve childrene nekog elementa
      .should("contain", "Contact Us");
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    //closest() pretrazuje sve ancestore (ovde pri div koji je ancestor
    cy.get(".traversal-badge").closest("div").should("have.class", "thumbnail");
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get(".traversal-drinks-list > li").eq(2).should("contain", "Milk"); //u listi selektujemo item sa indeksom 2
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get("button").filter(".active").should("contain", "Button-1"); //filtrira rezultate
  });

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get(".traversal-pagination")
      .find("li") //find() --> pronalazi elemente
      .find("a")
      .should("have.length", 7);
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get(".traversal-table > tbody > tr > td")
      .first() // selektuje prvi element
      .should("contain", "Andy");
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get(".traversal-table > tbody > tr > td")
      .last() //selectuje poslednji element
      .should("contain", "Scott");
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get("#coffee").nextAll().should("have.length", 4); //gleda siblinge ISPOD njega
  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get("#coffee").nextUntil("#sugar").should("have.length", 3); //gleda sibligne ISPOD njega, ali mozes da mu postavis granicu
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get(".traversal-button-states > button")
      .not(".disabled") // sa not mu kazes na sta da ne obraca paznju (sta da preskoci)
      .should("not.have.class", "disabled");
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get(".traversal-mark").parent().should("contain", "Lorem ipsum"); //vraca parenta selektovanog elementa
  });

  it("parents() to get parents DOM element of elements", () => {
    cy.get(".traversal-cite").parents().should("match", "blockquote"); // vraca prvog parenta, ako ih ima vise
    //MATCH !!! da li taj parent ima tag <blockquote>
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    cy.get("#sugar").prev().should("contain", "Espresso"); //vraca prethodnog siblinga
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
    cy.get("#sugar").prevAll().should("have.length", 4); //vraca SVE prethodne siblinge
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
    cy.get("#sugar").prevUntil("#tea").should("have.length", 2); //vraca SVE prethodne sibling ali mozes da mu postavis granicu
  });

  it.only("siblings() To get all sibling DOM elements of elements", () => {
    cy.get("#sugar").siblings().should("have.length", 4); //vraca SVE PREOSTALE siblinge
  });
});
//-----------------------
