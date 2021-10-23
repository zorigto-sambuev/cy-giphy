import Page from "./page";

class ProfilePage extends Page {
    get iconAvatar() { return cy.get('div[class=\'Avatar-sc-94lmf3 drGXSQ\']') }
}

export default new ProfilePage();