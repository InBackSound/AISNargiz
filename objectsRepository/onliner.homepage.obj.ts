import { ElementFinder} from "protractor";
import { by, element } from 'protractor';

export class onlinerHomepageRepository{
    readonly onlinerLogo: ElementFinder = element(by.css(".onliner_logo"));
    readonly firstTitleNews: ElementFinder = element(by.css("div#widget-11"));
    readonly firstTeaserNews: ElementFinder = element(by.xpath("(//div[@class='g-middle']//div[@class='b-main-page-grid-4 b-main-page-news-2'][1]//li[@class='b-teasers-2__teaser'])[1]"));
}