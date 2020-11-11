import {After,Before, Status} from "cucumber";
import { browser } from "protractor";
// import { textGeneratorPage} from '../PageObjects/textGeneratorPage';
// let textgen = new textGeneratorPage();

export = function hookedSteps() {

// this.Before(async ()=> {
//   
// });


  this.After(async ()=> {
    await browser.sleep(1000);  //полюбоваься результатом
    await console.log(`Test is finished`);
    await browser.executeScript('window.localStorage.clear();');
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.driver.manage().deleteAllCookies();  
  });

}