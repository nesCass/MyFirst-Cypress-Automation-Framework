class Homepage_Po {
  visitHomepage() {
    cy.visit("/"); //base url
    //ili mozemo koristiti environment promenljivu
  }

  clickOn_Contact_Us_Button() {
    cy.get("#contact-us")
      .invoke("removeAttr", "target")
      .click({ force: true }, { timeout: 6000 });
  }
}

export default Homepage_Po; //exportujemo ovaj fajl da bi mogli kod da koristimo u drugim fajlovima
