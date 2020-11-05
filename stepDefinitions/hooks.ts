import {After,Before, Status} from "cucumber";
import { browser } from "protractor";

Before(function () {
  // This hook will be executed before all scenarios
});

Before({tags: "@CalculatorTesting"}, function () {
  browser.manage().window().maximize();
});

Before({tags: "@AngularTesting or @CalculatorTesting"}, function () {
  console.log(`I need to execute it first`);
});

After({tags: "@CalculatorTesting"}, function () {
    console.log(`Test is finished`);
  });

  
  After(async function (scenario) {
    if (scenario.result.status===Status.FAILED){
        //code to take screenshot
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
  });