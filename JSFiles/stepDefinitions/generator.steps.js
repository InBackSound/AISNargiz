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
cucumber_1.Given(/^User navigates to Text Generator site$/, () => __awaiter(void 0, void 0, void 0, function* () {
    // browser.waitForAngularEnabled(false);  перенесла в cucumberconfig
    yield protractor_1.browser.navigate().to(protractor_1.browser.params.generatorPageURL);
    yield textgen.Loaded();
}));
cucumber_1.When(/^User selects "(.*?)" in text variant field$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.chooseTextVariant(string);
}));
cucumber_1.When(/^User sets number of paragraphs: "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.enterNumberOfPharagr(string);
}));
cucumber_1.When(/^User sets min number of symbols in each paragraph: "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.enterMinSymbols(string);
}));
cucumber_1.When(/^User sets max number of symbols in each paragraph: "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.enterMaxSymbols(string);
}));
cucumber_1.When(/^User sets symbols before paragraph: "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.entersymbolBeforeText(string);
}));
cucumber_1.When(/^User sets symbols after paragraph: "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.entersymbolAfterText(string);
}));
cucumber_1.When(/^User sets uppercase checkbox on "(.*?)"$/, (clickornot) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.FindoutStatusUppercaseCheckBox().then((currentstatus) => __awaiter(void 0, void 0, void 0, function* () {
        yield console.log(`надо кликнуть?: ${clickornot}`);
        yield console.log(`currentstatus: ${currentstatus}`);
        //попытка4
        let result = (yield clickornot) + currentstatus;
        console.log('result: ' + result);
        if (result === "truenull") {
            yield console.log(`clickornot = true, currentstatus = null`);
            yield textgen.clickUppercaseCheckBox(); //если не прожато, но долно быть прожато
            yield console.log('если не прожато, но долно быть прожато - жму');
            yield protractor_1.browser.sleep(1000); //чтобы посмотреть, прожалось ли
        }
        else if (result === "truetrue") {
            yield console.log(`clickornot = true, currentstatus = true`);
            //await console.log("");
            yield console.log("ничего не делаем, уже нажато"); //ничего не делаем, уже нажато
        }
        else if (result === "falsetrue") {
            yield console.log(`clickornot = false, currentstatus = true`);
            yield textgen.clickUppercaseCheckBox(); //разожму кликом
            yield console.log('разожму кликом');
            yield protractor_1.browser.sleep(1000); //чтобы посмотреть, отжалось ли
        }
        else if (result === "falsenull") {
            yield console.log(`clickornot = false, currentstatus = null`);
            //await console.log("");
            yield console.log("оно не нажато и не должно быть нажато"); //оно не нажато и не должно быть нажато
        }
        yield console.log("### конец when");
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
    }));
}));
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
cucumber_1.When(/^User clicks generate button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.clickGenerateButton();
}));
cucumber_1.Then(/^Text variant field displays "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.verifyTextVariantChosenAsExpected(string);
}));
cucumber_1.Then(/^Text uppercase checkbox state should be "(.*?)"$/, (shouldbeclicked) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield textgen.FindoutStatusUppercaseCheckBox().then((clickedornot) => __awaiter(void 0, void 0, void 0, function* () {
        yield console.log(`Hi from find out uppercasestatus. clickedornot: ${clickedornot}`);
        if (shouldbeclicked == "true") { //если галочка должна быть прожата
            yield expect(clickedornot).to.equal('true'); //true тут - приходящее value из кода сайта. я ожидаю, что она прожата. кликнутость равна тру
        }
        else if (shouldbeclicked == "false") { //если галочка не должна быть прожата
            yield expect(clickedornot).to.equal(null); //null тут - приходящее value из кода сайта. я ожидаю, что она не будет прожата
        }
    }));
}));
cucumber_1.Then(/^Text strict regime checkbox state is "(.*?)"$/, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then(/^Number of symbols in generated text should be between "(.*?)" and "(.*?)"$/, (minvalue, maxvalue) => __awaiter(void 0, void 0, void 0, function* () {
    yield textgen.verifyNumberOfSymbolsFromTextBox(minvalue, maxvalue);
}));
