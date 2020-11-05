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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
const textGeneratorPage_1 = require("../PageObjects/textGeneratorPage");
let textgen = new textGeneratorPage_1.textGeneratorPage();
cucumber_1.Given(/^User navigates to "(.*?)" site$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "textgenerator") {
        protractor_1.browser.waitForAngularEnabled(false); //https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
        yield protractor_1.browser.get('https://service.webboss.pro/text-generator');
    }
}));
cucumber_1.When(/^User selects english language in text variants$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.textVariantsList.click(); //костыль родимый
    yield textgen.textVariantsList.sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
    yield textgen.textVariantsList.sendKeys(protractor_1.protractor.Key.ENTER);
}));
cucumber_1.When(/^User sets number of paragraph are "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.paragrNumber.clear();
    yield textgen.paragrNumber.sendKeys(string);
}));
cucumber_1.When(/^User sets min number of symbols are "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.minSymbols.clear();
    yield textgen.minSymbols.sendKeys(string);
}));
cucumber_1.When(/^User sets max number of symbols are "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.maxSymbols.clear();
    yield textgen.maxSymbols.sendKeys(string);
}));
cucumber_1.When(/^User sets symbols before paragraph are "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.symbolBeforeText.sendKeys(string);
}));
cucumber_1.When(/^User sets symbols after paragraph are "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.symbolAfterText.sendKeys(string);
}));
cucumber_1.When(/^User sets convert everything to uppercase checkbox to "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "true") { //true тут - текст в сценарии
        yield textgen.uppercaseCheckBox.click();
        yield textgen.uppercaseCheckBox.getAttribute('checked').then((clickerornot) => {
            expect(clickerornot).to.equal('true'); //true тут - приходящее value из кода сайта
        });
    }
    else if (string == "false") { //м вообще удалить часть кода
        yield textgen.uppercaseCheckBox.getAttribute('checked').then((clickerornot) => {
            console.log(`Позиция верхнего регистра: ${clickerornot}`);
            //expect(clickerornot).to.equal('true'); //если раскоментить (или вообще без if), при некликнутом чекбоксе тест будет падать
        });
    }
}));
cucumber_1.When(/^User sets strict regime checkbox to "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "true") {
        yield textgen.strictRegime.click();
        yield textgen.strictRegime.getAttribute('checked').then((clickerornot) => {
            console.log(`Позиция строгого режима: ${clickerornot}`);
        });
    }
    else if (string == "false") { //м вообще удалить часть кода
        yield textgen.strictRegime.getAttribute('checked').then((clickerornot) => {
            console.log(`Позиция строгого режима: ${clickerornot}`);
        });
    }
}));
cucumber_1.When(/^User clicks generate button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.generateButton.click();
}));
cucumber_1.Then(/^text was generated$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.resultTextBox.getAttribute('value').then((generatedtext) => (expect(generatedtext).to.be.a('string')));
}));
cucumber_1.Then(/^number of symbols should be between "(.*?)" and "(.*?)"$/, (minvalue, maxvalue) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.resultTextBox.getAttribute('value').then((generatedtext) => (console.log(`Сгенерированный текст: ${generatedtext}
        Количество знаков: ${generatedtext.length}`),
        expect(calcLenght(minvalue, maxvalue, generatedtext.length)).to.equal('correctresultvalue')));
    yield protractor_1.browser.sleep(2000);
}));
function calcLenght(minvalue, maxvalue, resultvalue) {
    if (Number(minvalue) <= Number(resultvalue) && Number(maxvalue) >= Number(resultvalue)) {
        console.log("Количество знаков верно: " + resultvalue);
        return "correctresultvalue";
    }
    else {
        console.log("Количество знаков неверно: " + resultvalue);
        return "wrongresultvalue";
    }
}
