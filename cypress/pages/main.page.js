import Page from "./page";

class MainPage extends Page {
    get trendingList() { return cy.xpath('//div[@class=\'ListWrapper-sc-1u057sz kZZpyE\']') }
    get searcher() { return cy.xpath('//*[@class="Input-sc-1rx367t cnqpd"]')}
    get searchButton() { return cy.xpath('//*[@id="searchbar"]/div/a')}
    get trendGif() { return cy.xpath('//li[@class=\'Item-sc-1l6cfr2 dwLszH\'][2]')}
    get shareLink() { return cy.xpath('//*[@class="Button-sc-jvdzf AnimatedButton-sc-1kuzh6p ShareIcon-sc-qeous BMWOH coHmbh jiBcRL"]')}
    get shareButton() {return cy.xpath('//*[@class="button__Button-sc-13ki10z-0 state-button-sc-whgkhc-0 khbecP kFwXgJ"]')}

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
