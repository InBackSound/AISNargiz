import { ExpectedConditions, browser, element, by } from "protractor";
import chai from "chai";
import { onlinerFooterRepository } from "../objectsRepository/onliner.footer.obj";

var expect = chai.expect;
const defaultTimeout = 6000;

export class OnlinerFooterPage {

    readonly onlinerElements = new onlinerFooterRepository;

    public async openOnlinerByURL(): Promise<void> {
        await browser.navigate().to(browser.params.onlinerPageURL);
    };

    public async loaded(): Promise<void> {
        //waiting when logo appears
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Homepage not loaded");
    };

    public async clickOnFooterLink(string): Promise<void> {
        //click on link from footer
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.footerFirstItems), defaultTimeout, "Footer not loaded");
        await element(by.xpath(`//footer//li[@class='footer-style__item']//a[contains(text(), '${string}')]`)).click()
    };

    public async verifyExpectedPageOpens(expectedtlink): Promise<void> {
        //check correct page opens
        let actuallink = await browser.getCurrentUrl();
        //console.log(`actuallink: ${actuallink}`)
        //console.log(`expecedtlink: ${expecedtlink}`)
        await expect(actuallink).to.equal(expectedtlink); 
    };

}