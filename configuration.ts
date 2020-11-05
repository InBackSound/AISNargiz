import {Config} from "protractor";
import { inherits } from "util";

// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    chromeDriver: '/home/nargiz/Dropbox/Typescript/TypeScriptCucumber/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_85.0.4183.87',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testspec.js'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };
  
  