import { ElementFinder} from "protractor";
import { by, element } from 'protractor';

export class onlinerRepository{
    readonly onlinerLogo: ElementFinder = element(by.css(".onliner_logo"));
    readonly firstTitleNews: ElementFinder = element(by.css("div#widget-11"));
    readonly firstTeaserNews: ElementFinder = element(by.xpath("(//div[@class='g-middle']//div[@class='b-main-page-grid-4 b-main-page-news-2'][1]//li[@class='b-teasers-2__teaser'])[1]"));
    readonly gorizontalMenu: ElementFinder = element(by.css(".b-main-navigation"));
    readonly verticalHamburger: ElementFinder = element(by.css(".header-style__underlay")); //Hamburger
    readonly sideMenu: ElementFinder = element(by.css(".header-style__navigation")); //displays after clicking on Hamburger
    readonly fastSearch: ElementFinder = element(by.css(".fast-search__input"));
    readonly footerFirstItems: ElementFinder = element(by.xpath(`(//footer//li[@class='footer-style__item'])[1]`));
    


    //Iframe, needed to enter and find some elements in DOM, if you won't switch to it - you will have error "Element Not Found"
    readonly searchPopupIframe = element(by.css(".modal-iframe"));
    readonly firstSearchItem: ElementFinder = element(by.xpath("(//a[@class='product__title-link'])[1]"));
}