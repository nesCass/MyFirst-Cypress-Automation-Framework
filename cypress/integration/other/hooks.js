/// <reference types = 'cypress' />

beforeEach(() => {
  // root-level hook
  // runs before every test
  cy.log("b e f o r e EACH");
});

describe("Hooks", () => {
  before(() => {
    // runs once before all tests in the block
    cy.log("before");
  });

  beforeEach(() => {
    // runs before each test in the block
    cy.log("before each");
  });

  afterEach(() => {
    // runs after each test in the block
    cy.log("after each");
  });

  after(() => {
    // runs once after all tests in the block
    cy.log("after");
  });

  it("TEST 2", () => {
    cy.log("OVO JE TEST 2");
  });
  it("TEST 1", () => {
    cy.log("OVO JE TEST 1");
  });
});
