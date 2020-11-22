import { browser, by} from "protractor";
import chai from "chai";
import { OnlinerHeaderPage } from "../PageObjects/onliner.header.page";
var expect = chai.expect;
let onliner = new OnlinerHeaderPage();

export = function onlinerSteps(): void {

    this.setDefaultTimeout(60 * 1000);
    
    this.Given(/^I am on Onliner homepage header$/, async()=> {
        await onliner.openOnlinerByURL();
        await onliner.loaded();
     });
    
    this.Then (/^Logo on the header is avaliable$/, async()=> {
        await onliner.verifyLogoIsAvaliable();
    });
    
    this.Then (/^The "(.*?)" page opens from header$/, async(expectedlink)=> {
        await onliner.verifyExpectedPageOpens(expectedlink);
    });
    
    this.When (/^Size of screen is full$/, async()=> {
        await onliner.setBrowserWindowMaximize();
    });
    
    this.When (/^Main menu is available$/, async()=> {
        await onliner.verifyMainMenuIsAvailable();
    });
        
    this.When (/^Search section is available$/, async()=> {
        await onliner.verifySearchSectionIsAvailable();
    });
    
    this.When (/^Size of screen is tiny$/, async()=> {
        await onliner.setBrowserWindowSize(600,1400);
    });
    
    this.When (/^Hamburger is available$/, async()=> {
        await onliner.verifyHamburgerIsAvailable();
    });
    
    this.When (/^I click on "(.*?)" on mainmenu$/, async(string)=> {
        await onliner.clickOnMainMenuItem(string);
    });
    
    this.When (/^I click on hamburger$/, async()=> {
        await onliner.clickOnHamburger();
    });
    
    this.When (/^I click on  "(.*?)" on the side menu$/, async(string)=> {
        await onliner.clickOnSideMenuItem(string);
    });
    
    this.When (/^I hover on "(.*?)" on mainmenu$/, async(string)=> {
        await onliner.hoverOnMainMenuItem(string);
    });
    
    this.Then (/^Drop-down menu of "(.*?)" opens$/, async(string)=> {
        await onliner.verifyDdlOfMainMenuIsAvaliable(string);
    });
    
    this.When (/^I click on logo$/, async()=> {
        await onliner.clickOnLogo();
    });
    
    }