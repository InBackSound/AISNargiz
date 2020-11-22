import { browser, by} from "protractor";
import chai from "chai";
import { OnlinerHomePage } from "../PageObjects/onliner.home.page";

var expect = chai.expect;
let onliner = new OnlinerHomePage();

export = function onlinerStepsHomepage(): void {

this.setDefaultTimeout(60 * 1000);

this.Given(/^I am on Onliner homepage$/, async()=> {
    await onliner.openOnlinerByURL();
    await onliner.loaded();
 });

this.Then (/^Logo on the top of the page is avaliable$/, async()=> {
    await onliner.verifyLogoIsAvaliable();
});

this.Then (/^First news from news_title is avaliable$/, async()=> {
    await onliner.verifyFirstNewsTitleIsAvaliable();
});

this.Then (/^First news from news_teaser is avaliable$/, async()=> {
    await onliner.verifyFirstTeaserNewsIsAvaliable();
});

this.When (/^I click on "(.*?)" on the homepage$/, async(string)=> {
    await onliner.clickOnLinksOnHomepage(string);
});

this.Then (/^The "(.*?)" page opens after homepage$/, async(expectedlink)=> {
    await onliner.verifyExpectedPageOpens(expectedlink);
});

}