import Page from "./page";

class SearchPage extends Page {
    get searchHeader() { return cy.xpath('//h1[@class="sc-bYwzba Title-sc-jgn010 cYmwOA kDbeTS"]') }

    open() {
        return super.open('/');
    }
}

export default new SearchPage();
