describe('main page validation', function (){
    const typedText = 'the marvels';
    const formatted = typedText.replace(/\s+/g, '-');
    beforeEach(() => {
        cy.visit('/'); // relative to baseUrl
    });
    it('should display all expected header menu items', function () {
        const expectedMenuItems = ['Reactions', 'Entertainment', 'Sports', 'Stickers', 'Artists'];
        expectedMenuItems.forEach((item) => {
            cy.contains('a', item).should('be.visible');
        });
        cy.get(`.sc-bcea8c3-3`).should('be.visible');
        cy.get('div').contains('Upload').should('be.visible');
        cy.get('div').contains('Create').should('be.visible');
        cy.get('div').contains('Log In').should('be.visible');
    });
    it('search field to be exist', function () {
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').should('be.visible');
        cy.get('input').should('have.attr', 'placeholder', '@username to search channels');
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').type('the office')
        cy.get('div[class*="sc-24bd6ef7-0"]').within(() => {
            cy.get('h4')
                .contains('Channels')
                .parent()
                .prevAll()
                .should('exist')
                .each(($el) => {
                    cy.wrap($el).should('contain.text', 'office');
                });
            cy.get('h4')
                .contains('Channels')
                .parent()
                .nextAll()
                .then(($rows) => {
                    cy.log(`Found ${$rows.length} suggestions under Channels`);
                });
        });
    });

    it('searching results types of content', function () {
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').type(typedText)
        cy.get('div[class*="sc-cyZbyy"]').click({force: true});
        cy.get('#giphy-search-pills').should('be.visible');
        cy.contains('h4', 'channels').should('be.visible');
        cy.get(`a[href="/search/${formatted}"]`).contains('GIFs').should('be.visible');
        cy.get(`a[href="/search/${formatted}-stickers"]`).contains('Stickers').should('be.visible');
        cy.get(`a[href="/search/${formatted}-clips"]`).contains('Clips').should('be.visible');
    })

    it('sort and filter option on searching results', function () {
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').type(typedText)
        cy.get('div[class*="sc-cyZbyy"]').click({force: true});
        cy.contains('button','Sort').should('be.visible');
        cy.contains('button', 'Filter').should('be.visible').and('not.have.class', 'active');
    })

    it('searching list is displayed', function () {
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').type(typedText)
        cy.get('div[class*="sc-cyZbyy"]').click({force: true});
        cy.get('.giphy-grid').should('be.visible');
        cy.get('a[href^="https://giphy.com/gifs/"]').then(($gifs) => {
            const randomIndex = Math.floor(Math.random() * $gifs.length);
            cy.wrap($gifs[randomIndex]).trigger('mouseover');
        });
    })

    it('searching item is displayed', function () {
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').type(typedText)
        cy.get('div[class*="sc-cyZbyy"]').click({force: true});
        cy.get('.giphy-grid').should('be.visible');
        cy.url().should('include', `/search/${formatted}`);
    })

    it('gif page redirection from trending section', function () {
        cy.get(`input[placeholder="Search all the GIFs and Stickers"]`).type(typedText)
        cy.get(`div[class*="sc-cyZbyy"]`).click({force: true});
        cy.url().should('include', `/search/${formatted}`);
        cy.get('a[href^="https://giphy.com/gifs/"]').then(($gifs) => {
            const randomIndex = Math.floor(Math.random() * $gifs.length);
            cy.wrap($gifs[randomIndex]).invoke('removeAttr', 'target').click();
        });
    });

    it('visit the link of the chosen gif in the trending section', function () {
        cy.get('input[placeholder="Search all the GIFs and Stickers"]').type(typedText)
        cy.get('div[class*="sc-cyZbyy"]').click({force: true});
        cy.url().should('include', `/search/${formatted}`);
        cy.get('a[href^="https://giphy.com/gifs/"]').then(($gifs) => {
            const randomIndex = Math.floor(Math.random() * $gifs.length);
            const selectedGif = $gifs[randomIndex];
            const href = selectedGif.getAttribute('href');
            const altText = selectedGif.querySelector('img')?.getAttribute('alt');
            // expect(altText).to.exist;
            cy.wrap(selectedGif).click();
            cy.visit(href);
            cy.get('.mb-3 > .relative img.giphy-gif-img').should('have.attr', 'alt', altText);
        });
    });
})