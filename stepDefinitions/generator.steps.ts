import { browser, by} from "protractor";
import chai from "chai";
var expect = chai.expect;
import { textGeneratorPage} from '../PageObjects/text.generator.page';
let textgen = new textGeneratorPage();


export = function genSteps(): void {

this.setDefaultTimeout(60 * 1000);

this.Given(/^User navigates to Text Generator site$/, async()=> {
        await textgen.OpenGeneratorByURL();
        await textgen.Loaded();
});

this.When (/^User selects "(.*?)" in text variant field$/, async(string)=> {
    await textgen.chooseTextVariant(string);
     
});
this.When (/^User sets number of paragraphs: "(.*?)"$/, async(string)=> {
    await  textgen.enterNumberOfPharagr(string);
});
this.When (/^User sets min number of symbols in each paragraph: "(.*?)"$/, async(string)=> {
    await  textgen.enterMinSymbols(string);
});
this.When (/^User sets max number of symbols in each paragraph: "(.*?)"$/, async(string)=> {
    await  textgen.enterMaxSymbols(string);
});
this.When (/^User sets symbols before paragraph: "(.*?)"$/, async(string)=> {
    await  textgen.entersymbolBeforeText(string);
});
this.When (/^User sets symbols after paragraph: "(.*?)"$/, async(string)=> {
    await  textgen.entersymbolAfterText(string);
});

this.When (/^User clicks generate button$/, async()=> {
    await textgen.clickGenerateButton();
});

this.Then(/^Text variant field displays "(.*?)"$/, async(string)=>{
    await textgen.verifyTextVariantChosenAsExpected(string);
});


this.Then(/^Text strict regime checkbox state is "(.*?)"$/, async(string)=>{   //do
    await browser.sleep(2000);
});

this.Then (/^Number of symbols in generated text should be between "(.*?)" and "(.*?)"$/, async(minvalue,maxvalue)=> {
    await textgen.verifyNumberOfSymbolsFromTextBox(minvalue,maxvalue);
});


//checkboxes

this.When(/^User sets uppercase checkbox on "(.*?)"$/, async (clickornot) => {  
    await textgen.FindoutStatusUppercaseCheckBox().then(async (currentstatus)=>{
        await console.log(`uppercase: должна быть галочка?: ${clickornot}`);
        await console.log(`uppercase: currentstatus: ${currentstatus}`);

        let result:string = await clickornot+currentstatus;
        console.log('result: '+result);
        if(result ==="truenull"){
            await console.log(`clickornot = true, currentstatus = null`);
            await textgen.clickUppercaseCheckBox();  //если не прожато, но долно быть прожато
            await console.log('если не прожато, но долно быть прожато - жму');
            //await browser.sleep(1000);  //чтобы посмотреть, прожалось ли
        }
        else if(result ==="truetrue"){
            await console.log(`clickornot = true, currentstatus = true`);
            //await console.log("");
            await console.log("ничего не делаем, уже нажато"); //ничего не делаем, уже нажато
        }
        else if(result ==="falsetrue"){
            await console.log(`clickornot = false, currentstatus = true`);
            await textgen.clickUppercaseCheckBox();  //разожму кликом
            await console.log('разожму кликом');
            //await browser.sleep(1000);  //чтобы посмотреть, отжалось ли
        }
        else if(result ==="falsenull"){
            await console.log(`clickornot = false, currentstatus = null`);
            //await console.log("");
            await console.log("оно не нажато и не должно быть нажато");  //оно не нажато и не должно быть нажато
        }
        await console.log("### конец when uppercase");
    });

});


this.When(/^User sets strict regime checkbox on "(.*?)"$/, async (clickornot) => {  
    await textgen.FindoutStatusStrictRegimeCheckBox().then(async (currentstatus)=>{
        await console.log(`strictregime: должна быть галочка?: ${clickornot}`);
        await console.log(`strictregime: currentstatus: ${currentstatus}`);
        
        let result:string = await clickornot+currentstatus;
        console.log('result: '+result);
        if(result ==="truenull"){
            await console.log(`clickornot = true, currentstatus = null`);
            await textgen.clickStrictRegimeCheckBox();  //если не прожато, но долно быть прожато
            await console.log('если не прожато, но долно быть прожато - жму');
            //await browser.sleep(1000);  //чтобы посмотреть, прожалось ли
        }
        else if(result ==="truetrue"){
            await console.log(`clickornot = true, currentstatus = true`);
            //await console.log("");
            await console.log("ничего не делаем, уже нажато"); //ничего не делаем, уже нажато
        }
        else if(result ==="falsetrue"){
            await console.log(`clickornot = false, currentstatus = true`);
            await textgen.clickStrictRegimeCheckBox();  //разожму кликом
            await console.log('разожму кликом');
            //await browser.sleep(1000);  //чтобы посмотреть, отжалось ли
        }
        else if(result ==="falsenull"){
            await console.log(`clickornot = false, currentstatus = null`);
            //await console.log("");
            await console.log("оно не нажато и не должно быть нажато");  //оно не нажато и не должно быть нажато
        }
        await console.log("### конец when strictregime");

    });
});

this.Then(/^Text uppercase checkbox state should be "(.*?)"$/, async (shouldbeclicked) => {  

    await textgen.FindoutStatusUppercaseCheckBox().then(async (clickedornot) => {
        await console.log(`Hi from find out uppercasestatus. clickedornot: ${clickedornot}`);
        if (shouldbeclicked == "true") {  //если галочка должна быть прожата
            await expect(clickedornot).to.equal('true');  //true тут - приходящее value из кода сайта. я ожидаю, что она прожата. кликнутость равна тру
        }
        else if (shouldbeclicked == "false") {  //если галочка не должна быть прожата
            await expect(clickedornot).to.equal(null); //null тут - приходящее value из кода сайта. я ожидаю, что она не будет прожата
        }
    })

});

this.Then(/^Text strict regime checkbox state should be "(.*?)"$/, async (shouldbeclicked) => { 
    await textgen.FindoutStatusStrictRegimeCheckBox().then(async (clickedornot) => {
        await console.log(`Hi from find out strictregimestatus. clickedornot: ${clickedornot}`);
        if (shouldbeclicked == "true") {  
            await expect(clickedornot).to.equal('true');  
        }
        else if (shouldbeclicked == "false") {  
            await expect(clickedornot).to.equal(null); 
        }
    })
});


//iframe donates

this.When (/^User enters "(.*?)" in Donate field iframe$/, async(string)=>{  
    await textgen.clickOnAgreeCookieButton();  //надо закрыть соглашение снизу, иначе может не промотаться
    await textgen.enterTextInDonateField(string);
});

this.Then (/^Donate field displays "(.*?)"$/, async(string)=>{
    await textgen.verifyTextDisplaysCorrectInDonate(string);
});

this.When (/^User choose "(.*?)" payment system$/, async(string)=> {
    await textgen.clickOnAgreeCookieButton(); //надо закрыть соглашение снизу, иначе не промотается
    await textgen.clickOnPaymentRadioButton(string);
});

this.Then (/^User sees "(.*?)" payment system was chosen$/, async(string)=> {
    await textgen.verifyPaymentWasChosenCorrectly(string);
});

//menu
this.When (/^User hovers on menu item Services$/, async()=> {
    await textgen.hoverOnMenuItem();
});

this.Then (/^Servises list opens$/, async()=> {
    await textgen.verifyItemMenuOpens();
});

}