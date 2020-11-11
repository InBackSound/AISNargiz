import {browser, by, element, ExpectedConditions} from "protractor";
const defaultTimeout = 6000;

export = function genSteps(): void {
    this.Given(/^User navigates to Text Generator site$/, async()=> {
        await browser.navigate().to(browser.params.generatorPageURL);
});

this.When (/^User enters "(.*?)" in iframe$/, async(string)=> {
    //await browser.element(by.id("rtconf2")).clear();
    //await browser.element(by.id("rtconf2")).sendKeys('12');
    await browser.switchTo().frame(element(by.xpath("//div[@id='blago']//iframe")).getWebElement());  //(by.css(".modal-iframe"));
    let searchedElement = await element(by.xpath("//textarea[@name='comment']"));
    await searchedElement.sendKeys('hiii');
    //await console.log(searchedElement);
    await browser.sleep(3000);  
     
});

this.Then (/^User sees "(.*?)"$/, async(string)=> {
    await console.log('testom')
    await browser.sleep(1000);   
});


this.When (/^User choose "(.*?)" payment system$/, async(string)=> {
    await browser.wait(ExpectedConditions.visibilityOf(element(by.css("div#cookies_warning .yes"))), defaultTimeout, "Coockie time not visible");
    await browser.element(by.css("div#cookies_warning .yes")).click();
    

    await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath("//div[@id='blago']//iframe"))), defaultTimeout, "Donate IFrame not visible");
    await browser.switchTo().frame(element(by.xpath("//div[@id='blago']//iframe")).getWebElement());  //(by.css(".modal-iframe"));
    let searchedElement = await element(by.xpath(`//input[@aria-label='${string}']`));
    await searchedElement.getAttribute('checked').then((value)=>{console.log(`checked attr before click:${value}`);});

    //await element(by.xpath("//button[@type='submit']")).scrollIntoView; // Прокрутка 
    //await searchedElement.hover;  
    await searchedElement.click();
    await searchedElement.getAttribute('checked').then((value)=>{console.log(`checked attr after click:${value}`);});

    });

    this.Then (/^User sees "(.*?)" payment system was chosen$/, async(string)=> {
        await console.log('testom');
        await browser.sleep(1000);   
    });
    


    

}