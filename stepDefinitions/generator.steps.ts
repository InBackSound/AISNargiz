import { Given, When, Then } from "cucumber";
import { browser,protractor } from "protractor";
import chai from "chai";
var expect = chai.expect;
import { textGeneratorPage } from '../PageObjects/textGeneratorPage';
let textgen = new textGeneratorPage();

Given(/^User navigates to "(.*?)" site$/, async(string)=> {
    if (string == "textgenerator") {
        browser.waitForAngularEnabled(false); //https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
        await browser.get('https://service.webboss.pro/text-generator');
    }
});

When (/^User selects english language in text variants$/, async()=> {
    await textgen.textVariantsList.click();  //костыль родимый
    await textgen.textVariantsList.sendKeys(protractor.Key.ARROW_DOWN);
    await textgen.textVariantsList.sendKeys(protractor.Key.ENTER);
});
When (/^User sets number of paragraph are "(.*?)"$/, async(string)=> {
    await  textgen.paragrNumber.clear();
    await  textgen.paragrNumber.sendKeys(string); 
});
When (/^User sets min number of symbols are "(.*?)"$/, async(string)=> {
    await  textgen.minSymbols.clear();
    await  textgen.minSymbols.sendKeys(string); 
});
When (/^User sets max number of symbols are "(.*?)"$/, async(string)=> {
    await  textgen.maxSymbols.clear();
    await  textgen.maxSymbols.sendKeys(string); 
});
When (/^User sets symbols before paragraph are "(.*?)"$/, async(string)=> {
    await  textgen.symbolBeforeText.sendKeys(string); 
});
When (/^User sets symbols after paragraph are "(.*?)"$/, async(string)=> {
    await  textgen.symbolAfterText.sendKeys(string); 
});
When(/^User sets convert everything to uppercase checkbox to "(.*?)"$/, async (string) => {
    if (string == "true") { //true тут - текст в сценарии
        await textgen.uppercaseCheckBox.click();
        await textgen.uppercaseCheckBox.getAttribute('checked').then((clickerornot) => {
            expect(clickerornot).to.equal('true'); //true тут - приходящее value из кода сайта
        })
    }
    else if (string == "false") { //м вообще удалить часть кода
        await textgen.uppercaseCheckBox.getAttribute('checked').then((clickerornot) => {
            console.log(`Позиция верхнего регистра: ${clickerornot}`);
            //expect(clickerornot).to.equal('true'); //если раскоментить (или вообще без if), при некликнутом чекбоксе тест будет падать
        })
    }
});
When (/^User sets strict regime checkbox to "(.*?)"$/, async(string)=> {
    if (string == "true") {  
        await textgen.strictRegime.click();
        await textgen.strictRegime.getAttribute('checked').then((clickerornot)=>{
            console.log(`Позиция строгого режима: ${clickerornot}`)
        })
    }
    else if (string == "false") { //м вообще удалить часть кода
        await textgen.strictRegime.getAttribute('checked').then((clickerornot) => {
            console.log(`Позиция строгого режима: ${clickerornot}`);
        })
    }
});
When (/^User clicks generate button$/, async()=> {
    await textgen.generateButton.click();
});
Then (/^text was generated$/, async()=> {
    await textgen.resultTextBox.getAttribute('value').then((generatedtext)=>(
        expect(generatedtext).to.be.a('string')
    ))

});
Then (/^number of symbols should be between "(.*?)" and "(.*?)"$/, async(minvalue,maxvalue)=> {
    await textgen.resultTextBox.getAttribute('value').then((generatedtext)=>(
        console.log(`Сгенерированный текст: ${generatedtext}
        Количество знаков: ${generatedtext.length}`),
        expect(calcLenght(minvalue,maxvalue,generatedtext.length)).to.equal('correctresultvalue')
    ));
    await browser.sleep(2000);
});

function calcLenght(minvalue: string, maxvalue: string, resultvalue:number): any {
    if (Number(minvalue) <= Number(resultvalue)  &&  Number(maxvalue) >= Number(resultvalue)){
        console.log("Количество знаков верно: "+resultvalue)
        return "correctresultvalue"
    }
    else {
        console.log("Количество знаков неверно: " +resultvalue)
        return "wrongresultvalue"
    }
}