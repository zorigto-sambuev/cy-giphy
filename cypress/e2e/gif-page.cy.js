describe('gif page validation', function () {
    const typedText = 'the marvels';
    const formatted = typedText.replace(/\s+/g, '-');
    it('Favorite, Copy Link, Download links are displayed', function () {
        cy.visit('/');
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').type(typedText);
        cy.get('div[class*="sc-cyZbyy"]').click({force: true});
        cy.url().should('include', `/search/${formatted}`);
        cy.get('a[href^="https://giphy.com/gifs/"]').then(($gifs) => {
            const randomIndex = Math.floor(Math.random() * $gifs.length);
            cy.wrap($gifs[randomIndex]).invoke('removeAttr', 'target').click();
            cy.contains('div', 'Favorite').should('be.visible');
            cy.contains('div', 'Copy Link').should('be.visible');
            cy.contains('div', 'Download').should('be.visible');
            cy.contains('div', 'Related GIFs').should('be.visible');
        });
    });

    it('Favorite button validation', function () {
        cy.visit('/');
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').type(typedText);
        cy.get('div[class*="sc-cyZbyy"]').click({force: true});
        cy.url().should('include', `/search/${formatted}`);
        cy.get('a[href^="https://giphy.com/gifs/"]').then(($gifs) => {
            const randomIndex = Math.floor(Math.random() * $gifs.length);
            cy.wrap($gifs[randomIndex]).invoke('removeAttr', 'target').click();
            cy.contains('div', 'Favorite').should('be.visible');
            cy.contains('div', 'Log In').should('be.visible');
        });
        cy.contains('div', 'Favorite').click();
        cy.contains('div', 'Favorite saved! You can access your favorites from the user menu.').should('be.visible');
        cy.contains('div', 'Added to Favorites').should('be.visible');
        cy.contains('div', 'GIPHY User').should('be.visible');
    });
})