import {Config, browser} from "protractor";
//import { inherits } from "util";
import * as reporter from "cucumber-html-reporter"; //import everything (на всяк случай), писать будем "reporter"
//var reporter = require('cucumber-html-reporter');

// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_85.0.4183.87',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    params: {
      defaultTimeout: 60000,
      generatorPageURL: "https://service.webboss.pro/text-generator"
  },

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/generatetext.feature'],
    
    onPrepare: () =>{
      browser.waitForAngularEnabled(false);
      browser.ignoreSynchronization=true;
    },

    onComplete: function () {
        console.log('onComplete');
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",  //not true, just for example
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
    cucumberOpts: {
        // require step definitions
        tags: "@GeneratorTesting",    //["@AngularTesting or @CalculatorTesting"],    //через запятую не получилось
        format:'json:./cucumberreport.json',
        require: [
          './stepDefinitions/*.js', // запускать это
        ]
      }
  
    // Options to be passed to Jasmine-node.

  };
  
  