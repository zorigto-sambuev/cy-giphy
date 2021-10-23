import Page from "./page";

class MainPage extends Page {
    get trendingList() { return cy.xpath('//div[@class="ListWrapper-sc-1mxkd1t djoQGB"]') }
    get searcher() { return cy.xpath('//*[@class="Input-sc-w75cdz tdeeo"]')}
    get searchButton() { return cy.xpath('//*[@id="searchbar"]/div/a')}
    get trendGif() { return cy.xpath('//*[@class="Item-sc-1yg4na3 bKPIpm"][2]')}
    get linkGif() { return cy.xpath('//div[@class="KRS9L9BsuEdhF-ACKiX8x"]')}

    typeSearch(searchtext) {
        this.searcher.type(searchtext);
        this.searchButton.click({ force: true });
    }

    findGif() {
        this.trendGif.click();
    }

    open() {
        return super.open('/');
    }
}

export default new MainPage();