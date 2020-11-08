"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorRepository = void 0;
const protractor_1 = require("protractor");
//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
class generatorRepository {
    constructor() {
        this.generateButton = protractor_1.element(protractor_1.by.id("generate"));
        this.resultTextBox = protractor_1.element(protractor_1.by.id("result"));
        this.textVariantsList = protractor_1.element(protractor_1.by.id("trLang"));
        this.paragrNumber = protractor_1.element(protractor_1.by.id("rtconf1"));
        this.minSymbols = protractor_1.element(protractor_1.by.id("rtconf2"));
        this.maxSymbols = protractor_1.element(protractor_1.by.id("rtconf3"));
        this.symbolBeforeText = protractor_1.element(protractor_1.by.id("rtconf4"));
        this.symbolAfterText = protractor_1.element(protractor_1.by.id("rtconf5"));
        this.uppercaseCheckBox = protractor_1.element(protractor_1.by.id("rttoLower"));
        this.strictRegimeCheckBox = protractor_1.element(protractor_1.by.id("rtStrogo"));
        //Iframe, needed to enter and find some elements in DOM, if you won't switch to it - you will have error "Element Not Found"
        //readonly searchPopupIframe = element(by.css(".modal-iframe"));
    }
}
exports.generatorRepository = generatorRepository;
