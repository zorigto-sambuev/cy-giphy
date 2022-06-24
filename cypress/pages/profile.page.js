import Page from "./page";

class ProfilePage extends Page {
    get iconAvatar() { return cy.get('.Avatar-sc-egp6lv') }
}

export default new ProfilePage();