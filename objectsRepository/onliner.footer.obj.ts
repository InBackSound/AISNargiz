import { ElementFinder} from "protractor";
import { by, element } from 'protractor';

export class onlinerFooterRepository{
    readonly onlinerLogo: ElementFinder = element(by.css(".onliner_logo"));
    readonly footerFirstItems: ElementFinder = element(by.xpath(`(//footer//li[@class='footer-style__item'])[1]`));
}