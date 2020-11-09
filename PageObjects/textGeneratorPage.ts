import { ExpectedConditions, promise, browser,element,by} from "protractor";
import { generatorRepository } from "../objectsRepository/generator.obj";
import { verifyLenght } from "../Calculations/calculations";
import chai from "chai";
var expect = chai.expect;
const defaultTimeout = 6000;

export class textGeneratorPage{
    readonly generatorElements = new generatorRepository;

    public async Loaded(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.textVariantsList), defaultTimeout, "Generator page not loaded");  //нуачо, пусть проверяет это :)
    }

    public async chooseTextVariant(variant:string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.textVariantsList), defaultTimeout, "textVariantsList not visible");
        await this.generatorElements.textVariantsList.element(by.cssContainingText("option", variant)).click();
    }

   public async enterNumberOfPharagr(numbofphar:string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.paragrNumber), defaultTimeout, "paragrNumber not visible");
        await this.generatorElements.paragrNumber.clear();
        await this.generatorElements.paragrNumber.sendKeys(numbofphar); 
    }

    public async enterMinSymbols(minsymbols:string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.minSymbols), defaultTimeout, "minSymbols not visible");
        await this.generatorElements.minSymbols.clear();
        await this.generatorElements.minSymbols.sendKeys(minsymbols); 
    }

    public async enterMaxSymbols(maxsymbols:string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.maxSymbols), defaultTimeout, "maxSymbols not visible");
        await this.generatorElements.maxSymbols.clear();
        await this.generatorElements.maxSymbols.sendKeys(maxsymbols); 
    }

    public async entersymbolBeforeText(symbolbeforetext:string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.symbolBeforeText), defaultTimeout, "symbolBeforeText not visible");
        await this.generatorElements.symbolBeforeText.clear();
        await this.generatorElements.symbolBeforeText.sendKeys(symbolbeforetext); 
    }

    public async entersymbolAfterText(symbolaftertext:string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.symbolAfterText), defaultTimeout, "symbolAfterText not visible");
        await this.generatorElements.symbolAfterText.clear();
        await this.generatorElements.symbolAfterText.sendKeys(symbolaftertext); 
    }

    public async FindoutStatusUppercaseCheckBox() : Promise<string> {   //смотрю на текущий статус галочки
        return new Promise((status) => {   //Any synchronous errors thrown in a then (or catch) result in the returned promise to fail: https://basarat.gitbook.io/typescript/future-javascript/promise
            this.generatorElements.uppercaseCheckBox.getAttribute('checked').then(async (value) => {
                //await console.log(`из возвращаемого обещания (FindoutStatusUppercaseCheckBox): ${value}`);
                await status(value);
            });
        });
    }

    public async clickUppercaseCheckBox(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.uppercaseCheckBox), defaultTimeout, "uppercaseCheckBox not visible");
        await this.generatorElements.uppercaseCheckBox.click();
    }

    public async FindoutStatusStrictRegimeCheckBox() {
        return (this.generatorElements.strictRegimeCheckBox.isSelected)   //смотрю на текущий статус галочки. очень старый код
   }

    public async clickStrictRegimeCheckBox(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.strictRegimeCheckBox), defaultTimeout, "strictRegimeCheckBox not visible");
        await this.generatorElements.strictRegimeCheckBox.click();
    }

    public async clickGenerateButton(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.generateButton), defaultTimeout, "generateButton not visible");
        await this.generatorElements.generateButton.click();
    }

    public async verifyTextVariantChosenAsExpected(expectedVariant:string): Promise<void> {
        //let actualVariant = await this.generatorElements.textVariantsList.getAttribute('value');  //ед. норм вариант, но я не проверяю по атрибутам. как вариант - присвоить номер каждому из 3х выборов тут. пока проверяю проверяемое
        let actualVariant = await this.generatorElements.textVariantsList.element(by.cssContainingText("option", expectedVariant)).getText(); //по сути проверяю, тот ли текст в опции. а не выбрана или нет в итоге
        //console.log(`actualVariant: ${actualVariant}`);
        //console.log(`expectedVariant: ${expectedVariant}`);
        await expect(actualVariant).to.equal(expectedVariant)
    }

    public async VerifyUppercaseStateTrue(): Promise<void> {
        let actualState = await this.generatorElements.uppercaseCheckBox.getAttribute('checked');
        await expect(actualState).to.equal('true');
    }

    public async VerifyStrickRegimeStateTrue(): Promise<void> {
        let actualState = await this.generatorElements.strictRegimeCheckBox.getAttribute('checked');
        await expect(actualState).to.equal('true')
    }

    public async verifyNumberOfSymbolsFromTextBox(minsymbols: string, maxsymbols: string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.resultTextBox), defaultTimeout, "resultTextBox not visible");
        await this.generatorElements.resultTextBox.getAttribute('value').then(async (generatedtext) => {
            await console.log(`Допустимое количество знаков: с ${minsymbols} по ${maxsymbols} включительно`);
            await console.log(`Итоговое количество знаков: ${generatedtext.length}`);
            await console.log(`Сгенерированный текст: ${generatedtext}`);  //м вынести в отдельную проверку, что текст сгенерился
            let actualresult = await verifyLenght(minsymbols, maxsymbols, generatedtext.length);
            await console.log(`Результат проверки: ${actualresult}`);
            await expect(actualresult).to.equal('correct');
        })
    }





}
