import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCarePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCarePage_PO";

/// <reference types = "cypress" />

describe(`ADD multiple items to the basket`, () => {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
  const autoStore_HairCarePage_PO = new AutoStore_HairCarePage_PO();

  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data; //moze i this.data = data
    });
  });
  beforeEach(() => {
    autoStore_Homepage_PO.accessHomePage();
    autoStore_Homepage_PO.clickOn_HareCare_Link();
  });

  //kako i u testu prostupiti podacima iz fajla  (nizu stringova- svakom pojedinacno)
  it(`Add specific ITEMS to basket`, () => {
    autoStore_HairCarePage_PO.addHairCareProductsToBasket();
  });
});
