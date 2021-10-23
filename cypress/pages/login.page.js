import Page from "./page";

class LoginPage extends Page {
    get inputEmail () { return cy.get('input[type="email"]') }
    get inputPassword () { return cy.get('input[type="password"]') }
    get buttonLogIn () { return cy.get('.login-form__CTAButton-sc-1vrkdbu-3')}
    get notification () { return cy.get('.flash')}

    login(email, password){
        this.inputEmail.type(email);
        this.inputPassword.type(password);
        this.buttonLogIn.click();
    }

    open() {
        return super.open('/login');
    }
}

export default new LoginPage();