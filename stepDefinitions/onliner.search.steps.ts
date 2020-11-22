import { browser, by} from "protractor";
import chai from "chai";
import { OnlinerHeaderPage } from "../PageObjects/onliner.header.page";

var expect = chai.expect;
let onliner = new OnlinerHeaderPage();

export = function onlinerStepsSearch(): void {

this.setDefaultTimeout(60 * 1000);

this.Given(/^I am on Onliner homepage search$/, async()=> {
    await onliner.openOnlinerByURL();
    await onliner.loaded();
 });

this.When (/^I enter "(.*?)" in Search field$/, async(string)=> {
    await onliner.enterValueInSearch(string);
});

this.Then (/^I see found first item contains "(.*?)" in name$/, async(string)=> {
    await onliner.verifyItemNameHasWords(string);
});

this.When (/^I click on the first link is Search results$/, async()=> {
    await onliner.clickOnFirstItemInSearch();
});

this.When (/^I copy href of first search element for next checks$/, async()=> {
    await onliner.copyHrefOfFirstSearchElement();
});

this.Then (/^The item page opens$/, async()=> {
    await onliner.verifyExpectedItemPageOpens();
});
}