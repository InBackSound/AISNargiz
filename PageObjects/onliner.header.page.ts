import { ExpectedConditions, browser,element,by} from "protractor";
import chai from "chai";
import { onlinerHeaderRepository } from "../objectsRepository/onliner.header.obj";

var expect = chai.expect;
const defaultTimeout = 6000;
let expectedItemLink = '';

export class OnlinerHeaderPage{

    readonly onlinerElements = new onlinerHeaderRepository;

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

    public async verifyExpectedPageOpens(expectedtlink): Promise<void> {
        //check correct page opens
        let actuallink = await browser.getCurrentUrl();
        //console.log(`actuallink: ${actuallink}`)
        //console.log(`expecedtlink: ${expecedtlink}`)
        await expect(actuallink).to.equal(expectedtlink); 
    };

    public async setBrowserWindowMaximize(): Promise<void> {
        //mazimize browser window
        await browser.manage().window().maximize();
    };

    public async verifyMainMenuIsAvailable(): Promise<void> {
        //check gorizontal mainmenu displays and it is visible
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.gorizontalMenu), defaultTimeout, "Main menu not loaded");
        let actualresult = await this.onlinerElements.gorizontalMenu.isDisplayed();
        //await console.log(`actualresult: ${actualresult}`);
        await expect(actualresult).to.equal(true);
    };

    public async verifySearchSectionIsAvailable(): Promise<void> {
        //check Search in header displays and it is visible
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.fastSearch), defaultTimeout, "Search not loaded");
        let actualresult = await this.onlinerElements.fastSearch.isDisplayed();
        //await console.log(`actualresult: ${actualresult}`);
        await expect(actualresult).to.equal(true);
    };

    public async setBrowserWindowSize(w,h): Promise<void> {
        //set size of browser window
        await browser.manage().window().setSize(w,h);
    };

    public async verifyHamburgerIsAvailable(): Promise<void> {
        //check button for opening sidebar displays and it is visible
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.verticalHamburger), defaultTimeout, "Hamburger not loaded");
        let actualresult = await this.onlinerElements.verticalHamburger.isDisplayed();
        //await console.log(`actualresult: ${actualresult}`);
        await expect(actualresult).to.equal(true);
    };

    public async clickOnMainMenuItem(string): Promise<void> {
        //click on block's headers on main page
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.gorizontalMenu), defaultTimeout, "Main menu not loaded");
        await element(by.xpath(`//ul[@class='b-main-navigation']//span[contains(text(),'${string}')]`)).click();
    };

    public async clickOnHamburger(): Promise<void> {
        //check button for opening sidebar displays and it is visible
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.verticalHamburger), defaultTimeout, "Hamburger not loaded");
        await this.onlinerElements.verticalHamburger.click();
    };

    public async clickOnSideMenuItem(string): Promise<void> {
        //click on item from side menu
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.sideMenu), defaultTimeout, "Side menu not loaded");  
        await element(by.xpath(`//div[@class='header-style__aside']//span[contains(text(),'${string}')]`)).click();
    };

    public async hoverOnMainMenuItem(string): Promise<void> {
        //hover on main menu item
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.gorizontalMenu), defaultTimeout, "Main menu not loaded");
        await browser.actions().
            mouseMove(element(by.xpath(`//ul[@class='b-main-navigation']//span[contains(text(),'${string}')]`))).
            perform();
    };

    public async verifyDdlOfMainMenuIsAvaliable(string): Promise<void> {
        //check ddl of item from main menu opens
        await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath(`//span[@class='b-main-navigation__text'][contains(text(),'${string}')]/../..//div[contains(@class,'b-main-navigation__dropdown')]`))), defaultTimeout, "Main menu not loaded");
        let ddlmenu = await element(by.xpath(`(//span[@class='b-main-navigation__text'][contains(text(),'${string}')]/../..//div[contains(@class,'b-main-navigation__dropdown')])[1]`)).isDisplayed();
        //await console.log(`actualresult: ${ddlmenu}`);
        await expect(ddlmenu).to.equal(true);
    };

    public async clickOnLogo(): Promise<void> {
        //click on logo 
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Logo not loaded");
        await this.onlinerElements.onlinerLogo.click();
    };


    //search 

    public async enterValueInSearch(string): Promise<void> {
        //enter value to Search field
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.fastSearch), defaultTimeout, "Search not loaded");
        await this.onlinerElements.fastSearch.sendKeys(string);
    };

    public async verifyItemNameHasWords(expectedWords): Promise<void> {
        //check first element from Search IFrame
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.fastSearch), defaultTimeout, "Search not loaded");
        await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());  //change focus to IFrame
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.firstSearchItem), defaultTimeout, "Search results npt loaded");
        let itemName = await this.onlinerElements.firstSearchItem.getText();
        let itemNameLowerCase = await (itemName.toLowerCase());
        let stringLoweCase = await (expectedWords.toLowerCase());
        let includesOrNot = await itemNameLowerCase.includes(stringLoweCase);
         //await console.log('itemNameLowerCase: '+itemNameLowerCase);
         //await console.log('stringLoweCase: '+stringLoweCase);
        // await console.log('includesOrNot: '+includesOrNot);
        await expect(includesOrNot).to.equal(true);
        await browser.switchTo().defaultContent();  //выйти из iframe
        
    };

    public async clickOnFirstItemInSearch(): Promise<void> {
        //click on first link from search
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.searchPopupIframe), defaultTimeout, "Iframe not loaded");
        await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());  //change focus to IFrame
        await this.onlinerElements.firstSearchItem.click();
        //await browser.switchTo().defaultContent();  //выходить из IFrame не надо, система переходит на новую стр
    };


    public async copyHrefOfFirstSearchElement(): Promise<void> {
        //copy link of first element from search results
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.searchPopupIframe), defaultTimeout, "Iframe not loaded");
        await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());  //change focus to IFrame
        expectedItemLink = await this.onlinerElements.firstSearchItem.getAttribute('href');
        await browser.switchTo().defaultContent();  //выйти из iframe

    };

    
    public async verifyExpectedItemPageOpens(): Promise<void> {
        //check correct item page opens
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Logo not loaded");
        let actuallink = await browser.getCurrentUrl();
        await console.log(`actuallink: ${actuallink}`);
        await console.log(`expectedItemLink: ${expectedItemLink}`);  //global variable, took href from previous step
        await expect(actuallink).to.equal(expectedItemLink);
    };

}

