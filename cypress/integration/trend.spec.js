import MainPage from '../pages/main.page';
import SearchPage from '../pages/searcher.page';
import LinkedPage from '../pages/linked.page';

describe('TrendSection', function (){
    beforeEach(function (){
        MainPage.open();
    })
    it('trending section to be exist', function () {
        MainPage.trendingList.should('be.visible');
    });
    it('search field to be exist', function () {
        MainPage.searcher.should('be.visible');
    });
    it('can type text into search field', function () {
        MainPage.searcher.type('birthday')
        MainPage.searcher.should('have.value','birthday')
    });
    it('typed text is matched searcher page', function () {
        MainPage.typeSearch('birthday')
        SearchPage.searchHeader.should('be.visible');
    });
    it('click on a gif in trending section', function () {
        MainPage.findGif();
        LinkedPage.linkedGif.should('be.visible');
    });
});