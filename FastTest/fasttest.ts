import { browser, by, element } from "protractor";


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

}