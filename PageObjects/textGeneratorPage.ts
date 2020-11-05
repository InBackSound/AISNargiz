import { ElementFinder} from "protractor";
import {element,by} from "protractor";
export class textGeneratorPage{
    generateButton:ElementFinder;
    resultTextBox:ElementFinder;
    textVariantsList:ElementFinder;
    paragrNumber:ElementFinder;
    minSymbols:ElementFinder;
    maxSymbols:ElementFinder;
    symbolBeforeText:ElementFinder;
    symbolAfterText:ElementFinder;
    uppercaseCheckBox:ElementFinder;
    strictRegime:ElementFinder;

    constructor(){
        this.generateButton=element(by.id("generate"));
        this.resultTextBox=element(by.id("result"))
        this.textVariantsList=element(by.id("trLang")); 
        this.paragrNumber=element(by.id("rtconf1"));
        this.minSymbols=element(by.id("rtconf2"));
        this.maxSymbols=element(by.id("rtconf3"));
        this.symbolBeforeText=element(by.id("rtconf4"));
        this.symbolAfterText=element(by.id("rtconf5"));
        this.uppercaseCheckBox=element(by.id("rttoLower"));
        this.strictRegime=element(by.id("rtStrogo"));
    }
}