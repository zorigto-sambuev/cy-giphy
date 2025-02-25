import Page from "./page";

class LoginPage extends Page {
    get inputEmail () { return cy.get('input[type="email"]') }
    get inputPassword () { return cy.get('input[type="password"]') }
    get buttonLogIn () { return cy.get('body > div.sc-8d8c1c0a-0.cagddh > div > form > button')}
    get notification () { return cy.get('body > div.sc-9124df2e-0.etvfMo.fixed.left-0.right-0.top-0 > div')}
    get emailValidation() { return cy.get('.dropdown__DropdownContainer-sc-w5qxqu-0') }
    get passwordValidation() { return cy.get('.dropdown__DropdownContainer-sc-w5qxqu-0') }

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