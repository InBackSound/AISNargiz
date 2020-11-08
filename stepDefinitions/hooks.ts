import {After,Before, Status} from "cucumber";
import { browser } from "protractor";

Before(function () {
  // This hook will be executed before all scenarios
});

Before({tags: "@GeneratorTesting"}, function () {
  browser.manage().window().maximize();
});

After({tags: "@GeneratorTesting"}, function () {
    console.log(`Test is finished`);
  });

  
  After(async function (scenario) {
    if (scenario.result.status===Status.FAILED){
        //code to take screenshot
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    };
    await browser.sleep(1000);  //полюбоваься результатом
    await browser.executeScript('window.localStorage.clear();');
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.driver.manage().deleteAllCookies();  
  });