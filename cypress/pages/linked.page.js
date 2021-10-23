import Page from "./page";

class LinkedPage extends Page {
    get linkedGif() { return cy.xpath('//div[@class="KRS9L9BsuEdhF-ACKiX8x"]') }

    open() {
        return super.open('/')
    }
}

export default new LinkedPage();