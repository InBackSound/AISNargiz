// //import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor'; - for all
// import 'mocha';
// import { browser,protractor } from "protractor";
// import chai from "chai";
// var expect = chai.expect;
// import { textGeneratorPage } from './PageObjects/textGeneratorPage';
// let textgen = new textGeneratorPage();


// describe('Test', () => {
//     it('Open text page', async () => {

//         browser.waitForAngularEnabled(false); //https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular-on-page-load
//         browser.get('https://service.webboss.pro/text-generator');
        

//         await textgen.textVariantsList.click();  //костыль родимый
//         await textgen.textVariantsList.sendKeys(protractor.Key.ARROW_DOWN);
//         await textgen.textVariantsList.sendKeys(protractor.Key.ENTER);

//         await  textgen.paragrNumber.clear();
//         await  textgen.paragrNumber.sendKeys("1"); 

//         await  textgen.minSymbols.clear();
//         await  textgen.minSymbols.sendKeys("50"); 

//         await  textgen.maxSymbols.clear();
//         await  textgen.maxSymbols.sendKeys("100"); 

//         await  textgen.symbolBeforeText.sendKeys("<p>"); 
//         await  textgen.symbolAfterText.sendKeys("/<p>"); 

//         await textgen.uppercaseCheckBox.click();
//         await textgen.uppercaseCheckBox.getAttribute('checked').then((clickerornot)=>{
//             expect(clickerornot).to.equal('true'); 
//             console.log(`checkBox position: ${clickerornot}`)
//         })

//         await textgen.strictRegime.click();
//         await textgen.strictRegime.getAttribute('checked').then((clickerornot)=>{
//             //expect(clickerornot).to.equal('true'); 
//             console.log(`checkBox position: ${clickerornot}`)
//         })

//         await textgen.generateButton.click();

//         await textgen.resultTextBox.getAttribute('value').then((generatedtext)=>(
//             console.log(`Generated text: ${generatedtext}
//             Длина строки: ${generatedtext.length}`)
//         ))

//         await browser.sleep(4000);
//     })

// })