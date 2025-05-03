describe('authentication page validation', ()=>{

    beforeEach(() => {
        cy.visit('/login');
    });

    it('login items are displayed', ()=>{
        cy.contains('button', 'Log In').should('be.visible');
        cy.contains('button', 'Sign Up').should('be.visible');
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
        cy.contains('a', 'Log in with Facebook').should('be.visible');
        cy.contains('a', 'Log in with Apple').should('be.visible');
    })

    it('forgot your password link', () =>{
        cy.contains('a', 'Forgot Your Password?').should('be.visible');
        cy.contains('a', 'Forgot Your Password?').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/password/reset');
        cy.get('img[alt="Be Animated"]').should('be.visible');
        cy.contains('h3', 'Reset Password').should('be.visible');
        cy.get('[placeholder="email"]').should('be.visible');
        cy.contains('button', 'Send Email').should('be.visible');
    })

    it('terms and privacy policy links', () =>{
        cy.get('div[class*="sc-20008354-4"]').should('be.visible').and('contain.text', "By logging in you agree to GIPHY's");
        cy.contains('a', 'Terms of Service').should('be.visible').and('have.attr', 'href', '/terms');
        cy.contains('a', 'Privacy Policy').should('be.visible').and('have.attr', 'href').and('include', '/hc/en-us/articles/360032872931-GIPHY-Privacy-Policy');
    })

    it('happy path with login()', ()=>{
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
        cy.get(`div[class*="Avatar"]`).should('be.visible')
    })

    it('happy path', ()=>{
        cy.get('input[type="email"]').type(Cypress.env('EMAIL'))
        cy.get('input[type="password"]').type(Cypress.env('PASSWORD'))
        cy.get('button[type="submit"]').click()
        cy.get(`div[class*="Avatar"]`).should('be.visible')
    })

    it('error message for email', ()=>{
        cy.get('input[type="password"]').type('qqqqqq')
        cy.get('form').submit();
    })

    it('error message for password', ()=>{
        cy.get('input[type="password"]').type('q')
            .invoke('prop', 'display').then((msg)=>{
                cy.log(msg)
        })
    })
})