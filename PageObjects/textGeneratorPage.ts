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

    public async FindoutStatusStrictRegimeCheckBox() : Promise<string> {
        return new Promise((status) => {   
            this.generatorElements.strictRegimeCheckBox.getAttribute('checked').then(async (value) => {
                //await console.log(`из возвращаемого обещания (FindoutStatusStrictRegimeCheckBox): ${value}`);
                await status(value);
            });
        });
    }

    public async clickUppercaseCheckBox(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.uppercaseCheckBox), defaultTimeout, "uppercaseCheckBox not visible");
        await this.generatorElements.uppercaseCheckBox.click();
    }
    public async clickStrictRegimeCheckBox(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.strictRegimeCheckBox), defaultTimeout, "strictRegimeCheckBox not visible");
        await this.generatorElements.strictRegimeCheckBox.click();
        console.log('прожала strict regime')
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
/*
    public async VerifyUppercaseStateTrue(): Promise<void> {
        let actualState = await this.generatorElements.uppercaseCheckBox.getAttribute('checked');
        await expect(actualState).to.equal('true');
    }

    public async VerifyStrickRegimeStateTrue(): Promise<void> {
        let actualState = await this.generatorElements.strictRegimeCheckBox.getAttribute('checked');
        await expect(actualState).to.equal('true')
    }
*/
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

    //связано с iframe - донатами

    public async enterTextInDonateField(text: string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.donateIframe), defaultTimeout, "Donate IFrame not visible");
        await browser.switchTo().frame(this.generatorElements.donateIframe.getWebElement());
        //await element(by.xpath("//textarea[@name='comment']")).sendKeys(text);
        await this.generatorElements.donateCommentField.sendKeys(text);
        await browser.switchTo().defaultContent();  //выйти из iframe
    }

    public async verifyTextDisplaysCorrectInDonate(expectedtext: string): Promise<void> {
        await browser.switchTo().frame(this.generatorElements.donateIframe.getWebElement());  
        // await element(by.id("uniq160491480360547114")).getAttribute('value').then(async (displayedtext) => {
        let displayedtext = await this.generatorElements.donateCommentField.getAttribute('value');
        await console.log(`displayedtext: ${displayedtext}`);
        await console.log(`expectedtext: ${expectedtext}`);
        await expect(displayedtext).to.equal(expectedtext);
        await browser.switchTo().defaultContent();
    }

    public async clickOnPaymentRadioButton(payment: string): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.donateIframe), defaultTimeout, "Donate IFrame not visible");
        await browser.switchTo().frame(this.generatorElements.donateIframe.getWebElement());
        let paymentSystem = await element(by.xpath(`//input[@aria-label='${payment}']`)); //пер. варианта оплаты
        await paymentSystem.click();
        await browser.switchTo().defaultContent();  //выйти из iframe
    }

    public async verifyPaymentWasChosenCorrectly(expPaymentSystem: string): Promise<void> {
        await browser.switchTo().frame(this.generatorElements.donateIframe.getWebElement());
        let paymentSystem = await element(by.xpath(`//input[@aria-label='${expPaymentSystem}']`)); //пер. варианта оплаты
        await paymentSystem.getAttribute('checked').then(async (checkedornot)=>{
            await expect(checkedornot).to.equal('true');  //RECHECK
        });
        await browser.switchTo().defaultContent();  //выйти из iframe
    }


    //Cookie time
    public async clickOnAgreeCookieButton(): Promise<void> {   //надо ждать другое. потом искать этот элемент и кликать, если есть
        //но по-хорошему ждать этот элемент. но если не будет, идти дальше
        //и по-хорошему отдельным методом и вынести это в степы
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.coockieAgreementButton), defaultTimeout, "Coockie time not visible");
        
        await this.generatorElements.coockieAgreementButton.click();
    }


    public async hoverOnMenuItem(): Promise<void> {    //не рабоатет, рассинхрон в названиях
        await browser.wait(ExpectedConditions.visibilityOf(this.generatorElements.menuHeaderServices), defaultTimeout, "Menu is not visible");
        await browser.actions().
            mouseMove(this.generatorElements.menuHeaderServices).
            perform();
    }
    
    public async verifyItemMenuOpens(): Promise<void> {
        let displayed_or_not = await this.generatorElements.menuServices.isDisplayed();
        //await console.log('isenabled??? '+displayed_or_not);   //false_true
        //await this.generatorElements.passwordGenLink.click();   //можно кликнуть на пункт меню
        await expect(displayed_or_not).to.equal(true); 
    }


}
