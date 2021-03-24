class AutoStore_HairCarePage_PO {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach((element) => {
      //'productName' je niz stringova
      cy.addProductToBasket(element).then(() => {
        //debugger;    --> moze i ovako ali .debug je jednostanije
      });
    });
    cy.get(".dropdown-toggle > .label").click().debug(); //kako koristiti debugger
  }
}

export default AutoStore_HairCarePage_PO;
