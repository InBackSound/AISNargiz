import { ElementFinder} from "protractor";
import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class generatorRepository{
    readonly generateButton: ElementFinder = element(by.id("generate"));
    readonly resultTextBox: ElementFinder = element(by.id("result"));
    readonly textVariantsList: ElementFinder = element(by.id("trLang"));
    readonly paragrNumber: ElementFinder = element(by.id("rtconf1"));
    readonly minSymbols: ElementFinder = element(by.id("rtconf2"));
    readonly maxSymbols: ElementFinder = element(by.id("rtconf3"));
    readonly symbolBeforeText: ElementFinder = element(by.id("rtconf4"));
    readonly symbolAfterText: ElementFinder = element(by.id("rtconf5"));
    readonly uppercaseCheckBox: ElementFinder = element(by.id("rttoLower"));
    readonly strictRegimeCheckBox: ElementFinder = element(by.id("rtStrogo"));
    readonly menuHeaderServices: ElementFinder = element(by.xpath("//a[@title='Сервисы']"));
    readonly menuServices: ElementFinder = element(by.xpath("//ul[@class='adv-service submenu sub']"));
    readonly passwordGenLink: ElementFinder = element(by.xpath("//a[@href='https://service.webboss.pro/password-online-generator']"));  //inside Services menu


    //Iframe, needed to enter and find some elements in DOM, if you won't switch to it - you will have error "Element Not Found"
    readonly donateIframe: ElementFinder = element(by.xpath("//div[@id='blago']//iframe"));
    readonly donateCommentField = element(by.xpath("//textarea[@name='comment']"));  //inside

    readonly coockieAgreementButton: ElementFinder = element(by.css("div#cookies_warning .yes")); //всплывающее окошко снизу

}