"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor'; - for all
require("mocha");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
const textGeneratorPage_1 = require("./PageObjects/textGeneratorPage");
let textgen = new textGeneratorPage_1.textGeneratorPage();
describe('Test', () => {
    it('Open text page', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false); //https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
        protractor_1.browser.get('https://service.webboss.pro/text-generator');
        yield textgen.textVariantsList.click(); //костыль родимый
        yield textgen.textVariantsList.sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
        yield textgen.textVariantsList.sendKeys(protractor_1.protractor.Key.ENTER);
        yield textgen.paragrNumber.clear();
        yield textgen.paragrNumber.sendKeys("1");
        yield textgen.minSymbols.clear();
        yield textgen.minSymbols.sendKeys("50");
        yield textgen.maxSymbols.clear();
        yield textgen.maxSymbols.sendKeys("100");
        yield textgen.symbolBeforeText.sendKeys("<p>");
        yield textgen.symbolAfterText.sendKeys("/<p>");
        yield textgen.uppercaseCheckBox.click();
        yield textgen.uppercaseCheckBox.getAttribute('checked').then((clickerornot) => {
            expect(clickerornot).to.equal('true');
            console.log(`checkBox position: ${clickerornot}`);
        });
        yield textgen.strictRegime.click();
        yield textgen.strictRegime.getAttribute('checked').then((clickerornot) => {
            //expect(clickerornot).to.equal('true'); 
            console.log(`checkBox position: ${clickerornot}`);
        });
        yield textgen.generateButton.click();
        yield textgen.resultTextBox.getAttribute('value').then((generatedtext) => (console.log(`Generated text: ${generatedtext}
            Длина строки: ${generatedtext.length}`)));
        yield protractor_1.browser.sleep(4000);
    }));
});
