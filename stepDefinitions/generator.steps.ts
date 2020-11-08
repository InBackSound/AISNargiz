import { Given, When, Then } from "cucumber";
import { browser, by} from "protractor";
import chai from "chai";
var expect = chai.expect;
import { textGeneratorPage} from '../PageObjects/textGeneratorPage';
import { isNull } from "util";
let textgen = new textGeneratorPage();


Given(/^User navigates to Text Generator site$/, async()=> {
       // browser.waitForAngularEnabled(false);  перенесла в cucumberconfig
        await browser.navigate().to(browser.params.generatorPageURL);
        await textgen.Loaded();
});

When (/^User selects "(.*?)" in text variant field$/, async(string)=> {
    await textgen.chooseTextVariant(string);
     
});
When (/^User sets number of paragraphs: "(.*?)"$/, async(string)=> {
    await  textgen.enterNumberOfPharagr(string);
});
When (/^User sets min number of symbols in each paragraph: "(.*?)"$/, async(string)=> {
    await  textgen.enterMinSymbols(string);
});
When (/^User sets max number of symbols in each paragraph: "(.*?)"$/, async(string)=> {
    await  textgen.enterMaxSymbols(string);
});
When (/^User sets symbols before paragraph: "(.*?)"$/, async(string)=> {
    await  textgen.entersymbolBeforeText(string);
});
When (/^User sets symbols after paragraph: "(.*?)"$/, async(string)=> {
    await  textgen.entersymbolAfterText(string);
});

When(/^User sets uppercase checkbox on "(.*?)"$/, async (clickornot) => {   //тк код в итоге - click(). если надо будет, чтобы в итоге в любом случае стояла/не стояла галочка, наод будет получить значение value (как в then)  и isSelected проверить (видео 50:53)
    await textgen.FindoutStatusUppercaseCheckBox().then(async (currentstatus)=>{
        await console.log(`надо кликнуть?: ${clickornot}`);
        await console.log(`currentstatus: ${currentstatus}`);

        //попытка4
        let result:string = await clickornot+currentstatus;
        console.log('result: '+result);
        if(result ==="truenull"){
            await console.log(`clickornot = true, currentstatus = null`);
            await textgen.clickUppercaseCheckBox();  //если не прожато, но долно быть прожато
            await console.log('если не прожато, но долно быть прожато - жму');
            await browser.sleep(1000);  //чтобы посмотреть, прожалось ли
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
            await browser.sleep(1000);  //чтобы посмотреть, отжалось ли
        }
        else if(result ==="falsenull"){
            await console.log(`clickornot = false, currentstatus = null`);
            //await console.log("");
            await console.log("оно не нажато и не должно быть нажато")  //оно не нажато и не должно быть нажато
        }


        await console.log("### конец when")

        //попытка3
        /*
        if(currentstatus === "null"){`currentstatus == "null"`}
         if((clickornot ==='true') && (currentstatus === 'null')){console.log(`clickornot =="true" && currentstatus == "null"`)}
         else if(clickornot ==="true" && currentstatus === "true"){console.log(`clickornot =="true" && currentstatus == "true"`)}
         else if(clickornot ==="false" && currentstatus === "true"){console.log(`clickornot =="false" && currentstatus == "true"`)}
         else if(clickornot ==="false" && currentstatus === "null"){console.log(`clickornot =="true" && currentstatus == "true"`)}
         */

        //попытка2
        /*
        if (clickornot == "true"){  //верхнему реестру быть, надо, чтобы было нажато
            await console.log("зашёл в clickornot=true, currentstatus is "+currentstatus);
            if(currentstatus == "true"){
                await console.log("");
                await console.log("ничего не делаем, уже нажато") //ничего не делаем, уже нажато
            }
            else if(currentstatus == "null"){
                await textgen.clickUppercaseCheckBox();  //если не прожато, но долно быть прожато
                await console.log('если не прожато, но долно быть прожато - жму');
            }
            else{console.log("нипопало");}
        }
        else if (clickornot == "false"){  //не надо включать опцию верхнего реестра
            await console.log("зашёл в clickornot=false, currentstatus is "+currentstatus);
            if(currentstatus == "true"){
                await textgen.clickUppercaseCheckBox();  //разожму кликом
                await console.log('разожму кликом');
            }
            else if(currentstatus == "null"){
                await console.log("");
                await console.log("оно не нажато и не должно быть нажато")  //оно не нажато и не должно быть нажато
            }
            else{console.log("нипопало2");}
        }*/

        //попытка1
        /*
        if (currentstatus  = "null"){   //тоже перепроверить
            await console.log("зашёл в currentstatus  = null, clickornot is "+clickornot);
            if(clickornot == "true"){
                await textgen.clickUppercaseCheckBox();  //если не прожато, но долно быть прожато
                await console.log('если не прожато, но долно быть прожато - жму');
            }
            else if(clickornot == "false"){
                await console.log("");
                await console.log("оно не нажато и не должно быть нажато")  //оно не нажато и не должно быть нажато
            }
        }
        else if (currentstatus  = "true"){   //тоже перепроверить
            await console.log("зашёл в currentstatus  = true, clickornot is "+clickornot);
            await console.log('зашла в currentstatus=true')
            await console.log('прожато таки')
            if(clickornot == "true"){
                await console.log("");
                await console.log("ничего не делаем, уже нажато") //ничего не делаем, уже нажато
            }
            else if(clickornot == "false"){
                await  textgen.clickUppercaseCheckBox();  //разожму кликом
                await console.log('разожму кликом');
            }
        }*/
    });

});

// When(/^User sets strict regime checkbox on "(.*?)"$/, async (clickornot) => {   //тк код в итоге - click(). если надо будет, чтобы в итоге в любом случае стояла/не стояла галочка, наод будет получить значение value (как в then)  и isSelected проверить (видео 50:53)
    
//     if (clickornot == "true" && currentstatus != "false") {     //мб баг, так придёт булин или нан   //если не прожато, но долно быть прожато
//         await textgen.clickUppercaseCheckBox();
//     }
//     else if (clickornot == "true" && currentstatus != "true") {     //мб баг, так придёт булин или нан
//         console.log("") //ничего не делаем, уже нажато
//     }
//     else if (clickornot == "false" && currentstatus != "true") {     //мб баг, так придёт булин или нан   //оно не нажато и не должно быть нажато
//         await textgen.clickUppercaseCheckBox();  //разожму кликом
//     }
//     else if (clickornot == "false" && currentstatus != "false") {     //мб баг, так придёт булин или нан   //оно не нажато и не должно быть нажато
//         console.log("") //ничего не делаем, уже не нажато
//     }
// });

When (/^User clicks generate button$/, async()=> {
    await textgen.clickGenerateButton();
});

Then(/^Text variant field displays "(.*?)"$/, async(string)=>{
    await textgen.verifyTextVariantChosenAsExpected(string);
});

Then(/^Text uppercase checkbox state should be "(.*?)"$/, async (shouldbeclicked) => {  
    //старый способ
    // await textgen.generatorElements.uppercaseCheckBox.getAttribute('checked').then((clickedornot) => {   //clickedornot  -  достала из сайта
    //     console.log(`Hi from then check of uppercase. clickedornot is ${clickedornot}`);
    //     if (shouldbeclicked == "true") {
    //         expect(clickedornot).to.equal('true'); //true тут - приходящее value из кода сайта
    //     }
    //     else if (shouldbeclicked == "false") {
    //         expect(clickedornot).to.equal(null); //null тут - приходящее value из кода сайта
    //     }

    // })
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

Then(/^Text strict regime checkbox state is "(.*?)"$/, async(string)=>{   //do
    await browser.sleep(2000);
});

Then (/^Number of symbols in generated text should be between "(.*?)" and "(.*?)"$/, async(minvalue,maxvalue)=> {
    await textgen.verifyNumberOfSymbolsFromTextBox(minvalue,maxvalue);
});