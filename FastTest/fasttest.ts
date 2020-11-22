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
    
//menu
this.When (/^User hover on menu item Services$/, async()=> {
    await browser.wait(ExpectedConditions.visibilityOf(element(by.css("div#cookies_warning .yes"))), defaultTimeout, "Coockie time not visible");
    await browser.element(by.css("div#cookies_warning .yes")).click();
    await browser.sleep(1000);
    //await browser.element(by.xpath("//a[@title='Сервисы']"));
    //await browser.element(by.css("//a[@title='Сервисы']")).hover;
    //await browser.switchTo().frame(element(by.xpath("//div[@id='blago']//iframe")).getWebElement());  //(by.css(".modal-iframe"));
    //let a = await element(by.xpath(`//input[@aria-label='Pay via wallet']`));
    //await browser.executeScript('$("//input[@aria-label='Pay via wallet']").trigger("mouseover")');
    let searchedElement = await browser.element(by.xpath("//a[@href='https://service.webboss.pro/']"));
    //await browser.executeScript('$("searchedElement").trigger("mouseover")');
    browser.actions().
        mouseMove(searchedElement).
        perform();
 
    await browser.sleep(1000);


});

this.Then (/^User can hover on menu item Generator Text$/, async()=> {
   
    await element(by.xpath("//a[@title='Генератор текста']")).hover;
});



//onliner

this.Given(/^I am on Onliner homepage$/, async()=> {
    await browser.navigate().to(browser.params.onlinerPageURL);
});

this.Then (/^Logo on the top of the page is avaliable$/, async()=> {
    let a = await element(by.css(".onliner_logo")).isDisplayed();
    await console.log("aaaaaaaaaaa "+a);
});

this.Then (/^First news from news_title is avaliable$/, async()=> {
    //hover
    let a = await element(by.css("div#widget-11")).isDisplayed();
    await console.log("aaaaaaaaaaa "+a);
});

this.Then (/^First news from news_teaser is avaliable$/, async()=> {

    browser.actions().
            mouseMove(element(by.xpath("//div[@class='g-middle']//div[@class='b-main-page-grid-4 b-main-page-news-2'][1]//li[@class='b-teasers-2__teaser'][1]"))).
            perform();

    let a = await element(by.xpath("//div[@class='g-middle']//div[@class='b-main-page-grid-4 b-main-page-news-2'][1]//li[@class='b-teasers-2__teaser'][1]")).isDisplayed();
    await console.log("aaaaaaaaaaa "+a);
});


this.When (/^I click on "(.*?)" on the homepage$/, async(string)=> {
    await element(by.xpath(`//div[@class='g-middle']//div[@class='b-main-page-grid-4 b-main-page-news-2']//a[contains(text(),'${string}')]`)).click();
});

this.Then (/^The "(.*?)" page opens$/, async(expectlink)=> {
    let actuallink = await browser.getCurrentUrl();
    console.log(actuallink)
    console.log(expectlink)
});

this.When (/^Size of screen is full$/, async()=> {
    await browser.manage().window().maximize();
});

this.When (/^Menu is available$/, async()=> {
    let a = await element(by.css(".b-main-navigation")).isDisplayed();
    await console.log("aaaaaaaaaaa "+a);
});

this.When (/^Search section is available$/, async()=> {
    let a = await element(by.css(".fast-search__input")).isDisplayed();
    await console.log("aaaaaaaaaaa "+a);
    await element(by.css(".fast-search__input")).sendKeys('дед мороз');
});

this.When (/^Size of screen is tiny$/, async()=> {
    await browser.manage().window().setSize(600,1720);
});

this.When (/^I click on hamburger$/, async()=> {
    await element(by.css(".header-style__underlay")).click();
});

this.When (/^I click on  "(.*?)" on the bottom menu$/, async(string)=> {
    await element(by.xpath(`//div[@class='header-style__aside']//span[contains(text(),'${string}')]`)).click();   
});

this.When (/^I click on "(.*?)" on footer$/, async(string)=> {
    await browser.actions().
            mouseMove(element(by.xpath(`//footer//li[@class='footer-style__item']//a[contains(text(), '${string}')]`))).
            perform();

    await element(by.xpath(`//footer//li[@class='footer-style__item']`)).element(by.xpath(`//a[contains(text(), '${string}')]`)).click()

});






}

