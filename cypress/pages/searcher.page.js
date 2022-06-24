import Page from "./page";

class SearchPage extends Page {
    get searchHeader() { return cy.xpath('//div[@class="Container-sc-1htr2ct hSyQIn"]') }

    open() {
        return super.open('/');
    }
}

export default new SearchPage();
