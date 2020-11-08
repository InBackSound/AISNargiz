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
exports.textGeneratorPage = void 0;
const protractor_1 = require("protractor");
const generator_obj_1 = require("../objectsRepository/generator.obj");
const calculations_1 = require("../Calculations/calculations");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
const defaultTimeout = 6000;
class textGeneratorPage {
    constructor() {
        this.generatorElements = new generator_obj_1.generatorRepository;
    }
    Loaded() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.textVariantsList), defaultTimeout, "Generator page not loaded"); //нуачо, пусть проверяет это :)
        });
    }
    chooseTextVariant(variant) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.textVariantsList), defaultTimeout, "textVariantsList not visible");
            yield this.generatorElements.textVariantsList.element(protractor_1.by.cssContainingText("option", variant)).click();
        });
    }
    enterNumberOfPharagr(numbofphar) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.paragrNumber), defaultTimeout, "paragrNumber not visible");
            yield this.generatorElements.paragrNumber.clear();
            yield this.generatorElements.paragrNumber.sendKeys(numbofphar);
        });
    }
    enterMinSymbols(minsymbols) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.minSymbols), defaultTimeout, "minSymbols not visible");
            yield this.generatorElements.minSymbols.clear();
            yield this.generatorElements.minSymbols.sendKeys(minsymbols);
        });
    }
    enterMaxSymbols(maxsymbols) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.maxSymbols), defaultTimeout, "maxSymbols not visible");
            yield this.generatorElements.maxSymbols.clear();
            yield this.generatorElements.maxSymbols.sendKeys(maxsymbols);
        });
    }
    entersymbolBeforeText(symbolbeforetext) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.symbolBeforeText), defaultTimeout, "symbolBeforeText not visible");
            yield this.generatorElements.symbolBeforeText.clear();
            yield this.generatorElements.symbolBeforeText.sendKeys(symbolbeforetext);
        });
    }
    entersymbolAfterText(symbolaftertext) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.symbolAfterText), defaultTimeout, "symbolAfterText not visible");
            yield this.generatorElements.symbolAfterText.clear();
            yield this.generatorElements.symbolAfterText.sendKeys(symbolaftertext);
        });
    }
    FindoutStatusUppercaseCheckBox() {
        return __awaiter(this, void 0, void 0, function* () {
            //var result: string = 'default';
            // this.generatorElements.uppercaseCheckBox.getAttribute('checked').then((status) => {
            //     result = "checkboxtrue";
            //     if (status) {   
            //         console.log(` СТАТУС ТРУШЕЧКА TextGeneratorPage -> FindoutStatusUppercaseCheckBox -> if(status) -> status: ${status}`)
            //         result = "checkboxtrue";
            //     }
            //     else {
            //         console.log(`СТАТУС НЕ ТРУ УВЫ TextGeneratorPage -> FindoutStatusUppercaseCheckBox -> else -> status: ${status}`)
            //         result = "checkboxfalse";
            //     }
            // })
            return new Promise((status) => {
                this.generatorElements.uppercaseCheckBox.getAttribute('checked').then((value) => __awaiter(this, void 0, void 0, function* () {
                    //await console.log(`из возвращаемого обещания (FindoutStatusUppercaseCheckBox): ${value}`);
                    yield status(value);
                }));
            });
        });
    }
    clickUppercaseCheckBox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.uppercaseCheckBox), defaultTimeout, "uppercaseCheckBox not visible");
            yield this.generatorElements.uppercaseCheckBox.click();
        });
    }
    FindoutStatusStrictRegimeCheckBox() {
        return __awaiter(this, void 0, void 0, function* () {
            return (this.generatorElements.strictRegimeCheckBox.isSelected); //смотрю на текущий статус галочки. очень старый код
        });
    }
    clickStrictRegimeCheckBox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.strictRegimeCheckBox), defaultTimeout, "strictRegimeCheckBox not visible");
            yield this.generatorElements.strictRegimeCheckBox.click();
        });
    }
    clickGenerateButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.generateButton), defaultTimeout, "generateButton not visible");
            yield this.generatorElements.generateButton.click();
        });
    }
    verifyTextVariantChosenAsExpected(expectedVariant) {
        return __awaiter(this, void 0, void 0, function* () {
            //let actualVariant = await this.generatorElements.textVariantsList.getAttribute('value');  //ед. норм вариант, но я не проверяю по атрибутам. как вариант - присвоить номер каждому из 3х выборов тут. пока проверяю проверяемое
            let actualVariant = yield this.generatorElements.textVariantsList.element(protractor_1.by.cssContainingText("option", expectedVariant)).getText(); //по сути проверяю, тот ли текст в опции. а не выбрана или нет в итоге
            //console.log(`actualVariant: ${actualVariant}`);
            //console.log(`expectedVariant: ${expectedVariant}`);
            yield expect(actualVariant).to.equal(expectedVariant);
        });
    }
    VerifyUppercaseStateTrue() {
        return __awaiter(this, void 0, void 0, function* () {
            let actualState = yield this.generatorElements.uppercaseCheckBox.getAttribute('checked');
            yield expect(actualState).to.equal('true');
        });
    }
    VerifyStrickRegimeStateTrue() {
        return __awaiter(this, void 0, void 0, function* () {
            let actualState = yield this.generatorElements.strictRegimeCheckBox.getAttribute('checked');
            yield expect(actualState).to.equal('true');
        });
    }
    verifyNumberOfSymbolsFromTextBox(minsymbols, maxsymbols) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.generatorElements.resultTextBox), defaultTimeout, "resultTextBox not visible");
            yield this.generatorElements.resultTextBox.getAttribute('value').then((generatedtext) => __awaiter(this, void 0, void 0, function* () {
                yield console.log(`Допустимое количество знаков: с ${minsymbols} по ${maxsymbols} включительно`);
                yield console.log(`Итоговое количество знаков: ${generatedtext.length}`);
                yield console.log(`Сгенерированный текст: ${generatedtext}`); //м вынести в отдельную проверку, что текст сгенерился
                let actualresult = yield calculations_1.verifyLenght(minsymbols, maxsymbols, generatedtext.length);
                yield console.log(`Результат проверки: ${actualresult}`);
                yield expect(actualresult).to.equal('correct');
            }));
        });
    }
}
exports.textGeneratorPage = textGeneratorPage;
