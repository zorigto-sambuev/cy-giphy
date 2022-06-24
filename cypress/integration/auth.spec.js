import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page'

describe('Auth', function (){
    beforeEach(function (){
       LoginPage.open();
    });

    it('successful log in', function (){
        LoginPage.login('muraways@gmail.com', 'Nfy.irf1990');
        ProfilePage.iconAvatar.should('be.visible')
    })

    it('wrong credentials throws error', function() {
        LoginPage.login('invalid@example.com', 'qwerty123');
        LoginPage.notification.should('contain.text', 'Incorrect authentication credentials.');
    });

    it('email format validation', function() {
        LoginPage.inputEmail.type('invalid');
        LoginPage.inputPassword.click();
        LoginPage.emailValidation.should('be.visible');
    });

    it('password format validation', function() {
        LoginPage.inputPassword.type('q');
        LoginPage.inputEmail.click();
        LoginPage.passwordValidation.should('be.visible');
    });
})