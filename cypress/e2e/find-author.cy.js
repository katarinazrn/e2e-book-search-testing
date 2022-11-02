describe('Find author', () => {
    it('Search for author', () => {
        cy.visit("https://katarinazrn.github.io/books-search");
        cy.get("ul>li:nth-child(2)>a").click();
        cy.get("input[name='term']").type("Jane Austen");
        cy.get("button[type='submit']").click();
        cy.get(".list > app-author-list-item:nth-child(1)> .item >.info > h2 >a").click();
        cy.wait(500);
        cy.get("h1").contains("Jane Austen");
    })
})