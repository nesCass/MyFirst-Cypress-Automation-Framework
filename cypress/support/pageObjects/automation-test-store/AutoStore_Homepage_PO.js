class AutoStore_Homepage_PO {
  accessHomePage() {
    cy.visit("https://automationteststore.com/");
  }

  clickOn_HareCare_Link() {
    cy.get("a[href*= 'product/category&path=']").contains("Hair Care").click();
  }
}

export default AutoStore_Homepage_PO;
