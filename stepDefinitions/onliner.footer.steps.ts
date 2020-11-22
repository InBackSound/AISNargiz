import { browser, by} from "protractor";
import chai from "chai";
import { OnlinerFooterPage } from "../PageObjects/onliner.footer.page";

var expect = chai.expect;
let onliner = new OnlinerFooterPage();

export = function onlinerSteps(): void {

this.setDefaultTimeout(60 * 1000);

this.Given(/^I am on Onliner homepage footer$/, async()=> {
    await onliner.openOnlinerByURL();
    await onliner.loaded();
 });

this.Then (/^The "(.*?)" page opens from footer$/, async(expectedlink)=> {
    await onliner.verifyExpectedPageOpens(expectedlink);
});

this.When (/^I click on "(.*?)" on footer$/, async(string)=> {
    await onliner.clickOnFooterLink(string);
});

}