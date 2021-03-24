class Contact_Us_Po {
  contactForm_Submission(
    firstName,
    lastName,
    email = null,
    body,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    if (email !== null) {
      // ova provera je za prazno email polje
      cy.get('[name="email"]').type(email);
    }
    cy.get("textarea.feedback-input").type(body);
    cy.get('[type="submit"]').click();

    cy.get($selector).contains(textToLocate, { timeout: 60000 });

    cy.screenshot();
    cy.screenshot("ime slike");
  }
}

export default Contact_Us_Po; //exportujemo ovaj fajl da bi mogli kod da koristimo u drugim fajlovima
