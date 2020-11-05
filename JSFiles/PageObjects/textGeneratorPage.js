"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textGeneratorPage = void 0;
const protractor_1 = require("protractor");
class textGeneratorPage {
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
        this.strictRegime = protractor_1.element(protractor_1.by.id("rtStrogo"));
    }
}
exports.textGeneratorPage = textGeneratorPage;
