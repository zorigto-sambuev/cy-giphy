import Page from "./page";

class MainPage extends Page {
    get trendingList() { return cy.xpath('//div[@class="ListWrapper-sc-1mxkd1t djoQGB"]') }
    get searcher() { return cy.xpath('//*[@class="Input-sc-w75cdz tdeeo"]')}
    get searchButton() { return cy.xpath('//*[@id="searchbar"]/div/a')}
    get trendGif() { return cy.xpath('//*[@class="Item-sc-1yg4na3 bKPIpm"][2]')}
    get shareLink() { return cy.xpath('//*[@class="Button-sc-1460l95 AnimatedButton-sc-21wx0k ShareIcon-sc-xbvrac boNNQF bLHwUK bBKMfa"]')}
    get shareButton() {return cy.xpath('//*[@class="sc-bkbjAj sc-hHEjAm iWemFi ezdYq"]')}

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
