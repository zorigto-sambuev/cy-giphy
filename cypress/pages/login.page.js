import Page from "./page";

class LoginPage extends Page {
    get inputEmail () { return cy.get('input[type="email"]') }
    get inputPassword () { return cy.get('input[type="password"]') }
    get buttonLogIn () { return cy.get('.login-form__CTAButton-sc-1vrkdbu-3')}
    get notification () { return cy.get('.flash')}
    get emailValidation() { return cy.xpath('//div[contains(@class, "FieldContainer-sc-12rmcgp blUQeF")][div//input[@type="email"]]//div[@class ="sc-eJoaVz loSOCs ss-alert "]') }
    get passwordValidation() { return cy.xpath('//div[contains(@class, "FieldContainer-sc-12rmcgp blUQeF")][div//input[@type="password"]]//div[@class ="sc-eJoaVz loSOCs ss-alert "]') }

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