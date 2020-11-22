import { ExpectedConditions, browser,element,by} from "protractor";
import chai from "chai";
import { onlinerHomepageRepository } from "../objectsRepository/onliner.homepage.obj";

var expect = chai.expect;
const defaultTimeout = 6000;


export class OnlinerHomePage{

    readonly onlinerElements = new onlinerHomepageRepository;

    public async openOnlinerByURL(): Promise<void> {
        await browser.navigate().to(browser.params.onlinerPageURL);
    };

    public async loaded(): Promise<void> {
        //waiting when logo appears
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Homepage not loaded");
    };

    public async verifyLogoIsAvaliable(): Promise<void> {
        //check logo displays and it is visible
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Logo not loaded");
        let actualresult = await this.onlinerElements.onlinerLogo.isDisplayed();
        //await console.log(`actualresult: ${actualresult}`);
        await expect(actualresult).to.equal(true);
    };

    public async verifyFirstNewsTitleIsAvaliable(): Promise<void> {
        //check logo displays and it is visible
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.firstTitleNews), defaultTimeout, "Title news not loaded");
        await browser.actions().
            mouseMove(this.onlinerElements.firstTitleNews).
            perform();
        let actualresult = await this.onlinerElements.firstTitleNews.isDisplayed();
        await expect(actualresult).to.equal(true)
    };

    public async verifyFirstTeaserNewsIsAvaliable(): Promise<void> {
        //check logo displays and it is visible
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.firstTeaserNews), defaultTimeout, "Teaser news not loaded");
        await browser.actions().
            mouseMove(this.onlinerElements.firstTeaserNews).
            perform();
        let actualresult = await this.onlinerElements.firstTeaserNews.isDisplayed();
        await expect(actualresult).to.equal(true)
    };

    public async clickOnLinksOnHomepage(string): Promise<void> {
        //click on block's headers on main page
        await element(by.xpath(`//div[@class='g-middle']//div[@class='b-main-page-grid-4 b-main-page-news-2']//a[contains(text(),'${string}')]`)).click();
    };

    public async verifyExpectedPageOpens(expectedtlink): Promise<void> {
        //check correct page opens
        let actuallink = await browser.getCurrentUrl();
        //console.log(`actuallink: ${actuallink}`)
        //console.log(`expecedtlink: ${expecedtlink}`)
        await expect(actuallink).to.equal(expectedtlink); 
    };

    
}

