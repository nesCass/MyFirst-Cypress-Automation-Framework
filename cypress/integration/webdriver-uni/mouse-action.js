/// <reference types ='cypress'/>

describe(`Test mouse action `, () => {
  it(`Scroll element into view`, () => {
    cy.visit("http://www.webdriveruniversity.com/");

    cy.get("#actions")
      .scrollIntoView() //prvo skrol na element
      .invoke("removeAttr", "target") //sklonimo  _blank
      .click({ force: true }); // force klik
  });

  it(`Drag and drop item `, () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");

    cy.get("#draggable").trigger("mousedown", "center");
    cy.get("#droppable")
      .trigger("mousemove", { which: 1 })
      .trigger("dragover")
      .trigger("mouseup", { force: true }); // ovo ne radi!!!!!  //mora plugin drag-an-drop
    // https://www.youtube.com/watch?v=lCSkgb2hFlA

    // cy.get("#draggable").drag("#droppable");  // nece ni sa plugin :(
  });

  it(`DOUBLE Click `, () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");

    cy.get("#double-click").dblclick();
  });
  it(`Click and Hold action`, () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");

    cy.get("#click-box")
      .trigger("mousedown", "center")
      .then(($el) => {
        expect($el).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
