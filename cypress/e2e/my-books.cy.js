describe("My books", () => {


    beforeEach('Find book', () => {
        cy.visit("https://katarinazrn.github.io/books-search");
        cy.get("input[name='term']").type("Harry Potter and the Half-Blood Prince");
        cy.get("button[type='submit']").click();
        cy.wait(500);
    })

    it("Add and remove from Want to read list from search result page", () => {

        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(1)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 1);
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").contains('Harry Potter and the Half-Blood Prince');

        cy.get("header > ul>li:nth-child(1)>a").click();
        cy.get("input[name='term']").type("Harry Potter and the Half-Blood Prince");
        cy.get("button[type='submit']").click();
        cy.wait(500);
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(1)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 0);
    })

    it("Add and remove from Reading list from search result page", () => {

        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(2)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.get("[class='reading list'] > .items > app-my-books-item").should('have.length', 1);
        cy.get("[class='reading list'] > .items > app-my-books-item").contains('Harry Potter and the Half-Blood Prince');

        cy.get("header > ul>li:nth-child(1)>a").click();
        cy.get("input[name='term']").type("Harry Potter and the Half-Blood Prince");
        cy.get("button[type='submit']").click();
        cy.wait(500);
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(2)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.get("[class='reading list'] > .items > app-my-books-item").should('have.length', 0);
    })

    it("Add and remove from Finished from search result page", () => {

        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(3)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.get("[class='finished list'] > .items > app-my-books-item ").should('have.length', 1);
        cy.get("[class='finished list'] > .items > app-my-books-item").contains('Harry Potter and the Half-Blood Prince');


        cy.get("header > ul>li:nth-child(1)>a").click();
        cy.get("input[name='term']").type("Harry Potter and the Half-Blood Prince");
        cy.get("button[type='submit']").click();
        cy.wait(500);
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(3)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.get("[class='finished list'] > .items > app-my-books-item").should('have.length', 0);
    })

    it("Add and remove from Want to read list from book details page", () => {

        cy.get("#results > app-book-list-item:nth-child(1)> .list-item >.image-link").click();
        cy.wait(500);
        cy.get(".buttons > button:nth-child(1)").click();

        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 1);
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").contains('Harry Potter and the Half-Blood Prince');

        cy.get("header > ul>li:nth-child(1)>a").click();
        cy.get("input[name='term']").type("Harry Potter and the Half-Blood Prince");
        cy.get("button[type='submit']").click();
        cy.wait(500);
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item >.image-link").click();
        cy.wait(500);
        cy.get(".buttons > button:nth-child(1)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 0);
    })

    it('Remove books from Want to read list ', () => {
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(1)").click();
        cy.get("#results > app-book-list-item:nth-child(2)> .list-item > .buttons > app-button > div > button:nth-child(1)").click();
        cy.get("#results > app-book-list-item:nth-child(3)> .list-item > .buttons > app-button > div > button:nth-child(1)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.wait(500);

        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 3);

        cy.get("[class='want-to-read list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 2);
        cy.get("[class='want-to-read list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 1);
        cy.get("[class='want-to-read list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 0);
    })

    it('Remove books from Reading list ', () => {
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(2)").click();
        cy.get("#results > app-book-list-item:nth-child(2)> .list-item > .buttons > app-button > div > button:nth-child(2)").click();
        cy.get("#results > app-book-list-item:nth-child(3)> .list-item > .buttons > app-button > div > button:nth-child(2)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.wait(500);

        cy.get("[class='reading list'] > .items > app-my-books-item").should('have.length', 3);

        cy.get("[class='reading list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='reading list'] > .items > app-my-books-item").should('have.length', 2);
        cy.get("[class='reading list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='reading list'] > .items > app-my-books-item").should('have.length', 1);
        cy.get("[class='reading list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='reading list'] > .items > app-my-books-item").should('have.length', 0);
    })

    it('Remove books from Finished list ', () => {
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(3)").click();
        cy.get("#results > app-book-list-item:nth-child(2)> .list-item > .buttons > app-button > div > button:nth-child(3)").click();
        cy.get("#results > app-book-list-item:nth-child(3)> .list-item > .buttons > app-button > div > button:nth-child(3)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.wait(500);

        cy.get("[class='finished list'] > .items > app-my-books-item").should('have.length', 3);

        cy.get("[class='finished list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='finished list'] > .items > app-my-books-item").should('have.length', 2);
        cy.get("[class='finished list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='finished list'] > .items > app-my-books-item").should('have.length', 1);
        cy.get("[class='finished list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > .active").click();
        cy.wait(300);
        cy.get("[class='finished list'] > .items > app-my-books-item").should('have.length', 0);
    })

    it('Move book from Want to read to Reading and from Reading to Finished', () => {
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(1)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.wait(500);
        cy.get("[class='want-to-read list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > button:nth-child(2)").click();
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 0);
        cy.get("[class='reading list'] > .items > app-my-books-item").should('have.length', 1);

        cy.get("[class='reading list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > button:nth-child(3)").click();
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 0);
        cy.get("[class='reading list'] > .items > app-my-books-item").should('have.length', 0);
        cy.get("[class='finished list'] > .items > app-my-books-item").should('have.length', 1);
    })

    it('Move book from Finised to Want to read', () => {
        cy.get("#results > app-book-list-item:nth-child(1)> .list-item > .buttons > app-button > div > button:nth-child(3)").click();
        cy.get("header > ul>li:nth-child(3)>a").click();
        cy.wait(500);
        cy.get("[class='finished list'] > .items > app-my-books-item:nth-child(1) >.item > app-button > .buttons > button:nth-child(1)").click();
        cy.get("[class='want-to-read list'] > .items > app-my-books-item").should('have.length', 1);
        cy.get("[class='finished list'] > .items > app-my-books-item").should('have.length', 0);
    })
})