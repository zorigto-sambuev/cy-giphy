import Page from "./page";

class LoginPage extends Page {
    get inputEmail () { return cy.get('input[type="email"]') }
    get inputPassword () { return cy.get('input[type="password"]') }
    get buttonLogIn () { return cy.get('.form-components__CTAButton-sc-98e1s3-3')}
    get notification () { return cy.get('.flash-message__Text-sc-1cn8h5f-2')}
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