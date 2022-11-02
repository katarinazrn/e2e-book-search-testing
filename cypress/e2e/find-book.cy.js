describe("Find book", () => {
  it("Search for book by title", () => {
    cy.visit("https://katarinazrn.github.io/books-search");
    cy.get("input[name='term']").type("Harry Potter and the Half-Blood Prince");
    cy.get("button[type='submit']").click();
    cy.wait(500);
    cy.get("#results > app-book-list-item:nth-child(1)> .list-item >.image-link").click();
    cy.wait(400);
    cy.get("h1").contains("Harry Potter and the Half-Blood Prince");
  })

  it("Search for book by title with no results", () => {
    cy.visit("https://katarinazrn.github.io/books-search");
    cy.get("input[name='term']").type("asdghjklqwertyui");
    cy.get("button[type='submit']").click();
    cy.wait(500);
    cy.get("p").contains("No results");
  })


  it("Search for book by Author", () => {
    cy.visit("https://katarinazrn.github.io/books-search");
    cy.get(".options> div:nth-child(2)>input").click();
    cy.get("input[name='term']").type("J. K. Rowling");
    cy.get("button[type='submit']").click();
    cy.wait(700);
    cy.get("#results > app-book-list-item:nth-child(1)> .list-item >.image-link").click();
    cy.wait(400);
    cy.get("h1").contains("Harry");
  })

  it("Search for book by Subject", () => {
    cy.visit("https://katarinazrn.github.io/books-search");
    cy.get(".options> div:nth-child(3)>input").click();
    cy.get("input[name='term']").type("magic school");
    cy.get("button[type='submit']").click();
    cy.wait(1000);
    cy.get("#results > app-book-list-item:nth-child(1)> .list-item >.image-link").click();
    cy.wait(400);
    cy.get("h1").contains("Harry");
  })

  it("Search for book by Place", () => {
    cy.visit("https://katarinazrn.github.io/books-search");
    cy.get(".options> div:nth-child(4)>input").click();
    cy.get("input[name='term']").type("hogwarts");
    cy.get("button[type='submit']").click();
    cy.wait(700);
    cy.get("#results > app-book-list-item:nth-child(1)> .list-item >.image-link").click();
    cy.wait(400);
    cy.get("h1").contains("Harry");
  })

  it("Search for book by Person", () => {
    cy.visit("https://katarinazrn.github.io/books-search");
    cy.get(".options> div:nth-child(5)>input").click();
    cy.get("input[name='term']").type("hermione");
    cy.get("button[type='submit']").click();
    cy.wait(700);
    cy.get("#results > app-book-list-item:nth-child(1)> .list-item >.image-link").click();
    cy.wait(400);
    cy.get("h1").contains("Harry");
  })


  it("Check pagination", () => {
    cy.visit("https://katarinazrn.github.io/books-search");
    cy.get("input[name='term']").type("harry potter");
    cy.get("button[type='submit']").click();

    cy.get('.last').then(lastNumber => {
      let totalPages = lastNumber.text();
      cy.wait(1000);
      for (let i = 0; i < totalPages - 1; i++) {
        cy.get('.current').contains(i + 1);
        cy.get('.next').click();
        cy.wait(700);
      }
      cy.wait(1300);
      cy.get('.first').click();
      cy.wait(1000);
      cy.get('.next').contains('2');
    })
  })
})